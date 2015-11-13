var app = require('./api');


app.get('/getEcho', function(req, res){
	return res.status(201).json(req.query);
});
app.post('/postEcho', function(req, res){
	return res.status(201).json(req.body);
});
