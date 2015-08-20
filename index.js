var crypto = require('crypto');

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//Replace with your secret
var secret = "XXXXXXXXXXXXXX";

app.use(bodyParser.json({ 
	verify: function(req, res, buf, encoding) {
		var callbackSignature = req.headers['x-callback-signature'];
		var hash = crypto.createHmac('SHA256', secret).update(buf).digest('base64');
		if(hash !== callbackSignature) {
			throw new Error("Invalid Request: HMAC mismatch");
		}
	}
}))

app.post('/webhook', function(req, res) {
	console.log("Successfully received json: ", req.body);
    res.end('OK');
});

var listener = app.listen(7000, function(){
    console.log('Webhook tester running on port ' + listener.address().port); //Listening on port 8888
});
