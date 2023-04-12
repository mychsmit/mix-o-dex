const express = require('express');

const WebSocket = require('ws');

var app = express();

const port = process.env.PORT || 8080

app.get("/widgets", function (req,res) {
	res.status(200).send("testing!");
});

const wss = new WebSocket.Server({port:8080});


wss.on('connection', function (wsclient) {
	wsclient.on('message', function message(data) {
		wss.clients.forEach(function (client) {
			if(client.readyState == WebSocket.OPEN && client != wsclient) {
				client.send(data, {binary: false});
			};
		});
	});
});


app.listen(port, '0.0.0.0', function() {

	console.log(`Server Is Now Running On Port ${port}`);

});