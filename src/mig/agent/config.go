// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Contributor:
// - Julien Vehent jvehent@mozilla.com [:ulfr]
package main

import (
	"code.google.com/p/gcfg"
	"fmt"
	"io/ioutil"
	"mig"
	"time"
)

type config struct {
	Agent struct {
		IsImmortal       bool
		InstallService   bool
		DiscoverPublicIP bool
		CheckIn          bool
		Relay            string
		Proxy            []string
		Socket           string
		HeartbeatFreq    string
		ModuleTimeout    string
		Api              string
	}
	ACL struct {
		MasterKey  []string
		Signatures uint
		Name       []string
	}
	Certs struct {
		Ca, Cert, Key string
	}
	Logging mig.Logging
}

// configLoad reads a local configuration file and overwrite the global conf
// variable with the parameters from the file
func configLoad(path string) (err error) {
	defer func() {
		if e := recover(); e != nil {
			err = fmt.Errorf("configLoad() -> %v", e)
		}
	}()
	var config config
	err = gcfg.ReadFileInto(&config, path)
	if err != nil {
		panic(err)
	}
	ISIMMORTAL = config.Agent.IsImmortal
	MUSTINSTALLSERVICE = config.Agent.InstallService
	DISCOVERPUBLICIP = config.Agent.DiscoverPublicIP
	CHECKIN = config.Agent.CheckIn
	LOGGINGCONF = config.Logging
	AMQPBROKER = config.Agent.Relay
	APIURL = config.Agent.Api
	PROXIES = config.Agent.Proxy
	ACLKEYS = config.ACL.MasterKey
	ACLSIGMIN = config.ACL.Signatures
	ACL = config.ACL.Name
	HEARTBEATFREQ, err = time.ParseDuration(config.Agent.HeartbeatFreq)
	if err != nil {
		panic(err)
	}
	MODULETIMEOUT, err = time.ParseDuration(config.Agent.ModuleTimeout)
	if err != nil {
		panic(err)
	}
	CACERT, err = ioutil.ReadFile(config.Certs.Ca)
	if err != nil {
		panic(err)
	}
	AGENTCERT, err = ioutil.ReadFile(config.Certs.Cert)
	if err != nil {
		panic(err)
	}
	AGENTKEY, err = ioutil.ReadFile(config.Certs.Key)
	if err != nil {
		panic(err)
	}
	return
}
