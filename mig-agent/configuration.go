package main
import(
    "mig.ninja/mig"
    "time"
)
var TAGS = struct {
    Operator string `json:"operator"`
}{
    "MIGDemo",
}
var ISIMMORTAL bool = false
var MUSTINSTALLSERVICE bool = true
var DISCOVERPUBLICIP bool = false
var DISCOVERAWSMETA bool = true
var CHECKIN bool = false
var EXTRAPRIVACYMODE = false
var APIURL string = "http://localhost:1664/api/v1/"
var LOGGINGCONF = mig.Logging{
    Mode:   "file",
    Level:  "debug",
    File:   "/var/cache/mig/mig-agent.log",
}
var AMQPBROKER string = "amqp://agent:W9dXRMYDQm7CiDyS5MpZAp9MCROPxBpd@localhost:5672/mig"
var PROXIES = []string{}
var SOCKET string = "127.0.0.1:51664"
var HEARTBEATFREQ time.Duration = 30 * time.Second
var REFRESHENV time.Duration = 60 * time.Second
var MODULETIMEOUT time.Duration = 300 * time.Second
var SPAWNPERSISTENT bool = true
var AGENTACL = [...]string{
`{
    "default": {
        "minimumweight": 2,
        "investigators": {
            "manav": {
                "fingerprint": "DEBFFEDECB1C80A3570DDF64255C79CB1F851DD8",
                "weight": 2
            }
        }
    }
}`}
var PUBLICPGPKEYS = [...]string{
`
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1

mI0EWBt3HAEEAKx5XPrBcK2mZdpiB0VIbVidDwkpVDo8qCg1x7vE3aqZeu/avuio
L+QRLNW+NTTqNs1eyYKtDasy0A2sdt6SVcbT0e9lvFOF6WmU9O6Clmz8uRfhfsW4
okWtgtv3HORpq+DJLQ6ZTLcENfZRRdjobmLFVMIXiNrES/xSgGzZc7i/ABEBAAG0
IG1hbmF2IEludmVzdGlnYXRvciA8bWFuYXZAbWFuYXY+iL4EEwECACgFAlgbdxwC
Gy8FCQHanAAGCwkIBwMCBhUIAgkKCwQWAgMBAh4BAheAAAoJECVcecsfhR3Y2bMD
/2Zd/GR+f+R9LLG5ASkXjN+QGnG/1QATLEywVivgkRVSDDnSit/lGFm50QYUkoHd
NSJHYlDaLIhZHeth3dB3uZMlip5u5MCMR3pdEm7+2kgi5216HUrijZO3M1O04krL
J1jBPZJopL6CIq4WDNLDJaPaicQaHAaWKfYSAjvXpNIyuI0EWBt3HAEEAJtfFSaM
NU5ePuz6+Ex04Cj5Yz5cqMbsCagTt9a8I06y0Iv5ztzAvSxq5RsGX+ir6wRxKQx6
CqWDUButSPEWRrK4l2YjpHQHfW5H81un/bNVkkA5SSYew/w+FjYIlhLPSAynxfzw
5e1cxeMniTtLCJO3MM3r+nM8Wo6R2/stG0GbABEBAAGJAUMEGAECAA8FAlgbdxwC
Gy4FCQHanAAAqAkQJVx5yx+FHdidIAQZAQIABgUCWBt3HAAKCRAd0o891JpHObA6
A/4sQi6t8xw7kYudhuwMFan295vowcO5fxK/bJbIxyeoBQ33la7eUW4HZ++54YTp
Cyr5judmIXlvGHbyNhVpfb5qEOVlz7LltFga2gKVXAXb1H56HSWq94gZGaqq/uJE
t3NixPqC2ExTTF3H1rdyUcMHFx/uhNHpS3AA7AkkQunCaNkJA/487/MfgcisE1vw
aKtm64z+55TMVRtnWVKdTYKqXFth4UkQwXnSBTnJCghvaNkdrzVI/5GBGNdnMSqu
l7EtJ4czQrygkiL5PVHnHx/PIQnrB4I7xlE6TRjUCGpzcgk7O6R1sgvpHU6Rb1Ru
tFJjfwHyZHzLwSSgjSTZqSWGUHT1WQ==
=7ZHC
-----END PGP PUBLIC KEY BLOCK-----
`}
var CACERT = []byte("")
var AGENTCERT = []byte("")
var AGENTKEY = []byte("")
