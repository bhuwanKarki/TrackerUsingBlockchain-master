

### Installation

This application requires [Node.js](https://nodejs.org/) v4+ to run, and specifically uses truffle for interacting with ethereum.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/timojkankaanpaa/TrackerUsingBlockchain
$ cd TrackerUsingBlockchain
$ npm install -d
$ node start run
```
Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:3000
```

This application requires a local ethereum node to run with an open RPC interface. It is recommended that you use `ethereumjs-testrpc`, mostly because we're not even sure the contract works properly.
```sh
$ npm install -g ethereumjs-testrpc
$ testrpc
```


