# Romit Webhooks

The node.js example app included in this repository is an example to show you how to verify a callback that is returned from the Romit payments system. 

## Installation

Once you pull down the repository, edit the variable "secret" in the index.js file to contain your secret key that is provided to you in "Settings". If you are setup as a business, you can go to the "Payment Button" section and view your URL and secret at the bottom. 
Note that you'll need to have a publicly accessible webserver to test this out succesfully.

```sh
$ npm install
$ node index.js
```
