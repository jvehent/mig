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
var AMQPBROKER string = "amqp://agent:2eS7krkB8yMYgEXG2uaIsmpvwi78PE7b@localhost:5672/mig"
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
                "fingerprint": "46AAF74968F8552EBFD3CF5D081FE6936B4BD462",
                "weight": 2
            }
        }
    }
}`}
var PUBLICPGPKEYS = [...]string{
`
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1

mI0EWElI4QEEANPcOdNyrZDlDA5VUuHieg/DbLo9aoZPP6lhD/uek28SYR9qLOan
1ThRjHsuOCNAFJIm9TZ3rut80iu4XnESY7tRi42GSkxurzFFWahbIW8Fes4H1MYy
qqLhxIXiBPEHNz+TraN4gLIdcmHNkuPSqsq4V5KQde2CM+jZL4Yzbu9RABEBAAG0
IG1hbmF2IEludmVzdGlnYXRvciA8bWFuYXZAbWFuYXY+iL4EEwECACgFAlhJSOEC
Gy8FCQHanAAGCwkIBwMCBhUIAgkKCwQWAgMBAh4BAheAAAoJEAgf5pNrS9RiIREE
AK9qzb0GKAVf7AavoODE2zxY9d7U2Ze6DTjosDRemYmLPeecdwgKYMckyonYVvL6
a2wUPS+PSvcbDOzR6EiSZsmqZfxWlYIKJLA8/GXkkCVKv+KPjEqftxlq3Cu7Irhw
QuLkBv57s9rvSiSPMLIvupfoye6s4QtUI4BnQfTlMvk2uI0EWElI4QEEAKe1tPAn
5DaO1xbfK/6N+zmfoQMfhb4ZerxJZv/idR79aQV814n/nF4Uzk3UuHwCh0qyRHUK
ZXIbu9uHGmInzo6pF+uBA7CLkMqA6ZJnzCY7fuy2zSplA6N+SVsZNLGUxUgQepCn
Rkcuk/WmP3AphiqxFp9H4cwmfiNsjDeEdJ9vABEBAAGJAUMEGAECAA8FAlhJSOEC
Gy4FCQHanAAAqAkQCB/mk2tL1GKdIAQZAQIABgUCWElI4QAKCRD8xdN+j0R9lq2d
A/0cYH4OdOnLMq3zzyUtWroR+ZYDX/erRzdXZQFsVmcQwDVw0Zg5hJ06BuOo5Yza
DKhSpn/jkm4PAZaWyWrZSm+1BDJ7Ddpt+IiFa75rZbiIc4oAsHzfjVXgpnCULgE0
77f3StYqiFMus4xs6Di17ndFwDsNW7XtoiCl7kpnbJflG3WgBADOwIHsmApimL+r
9ESi3AgayBz+kSGu1T4CK37fS7imIQt4Bgm+cHR7u8z8ogNnZXBtiWP9UiD9WaSA
UMaPLmwW5FtrbzOROSX9ulj5Hmy3yS6eYTfbVVf5aUfh2GF6aeqoqfiyPHGmtrVF
qzDxCyzQsICBKRwin7NqLNp64DQJsw==
=q+NN
-----END PGP PUBLIC KEY BLOCK-----
`}
var CACERT = []byte("")
var AGENTCERT = []byte("")
var AGENTKEY = []byte("")
