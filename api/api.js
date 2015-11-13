require('../server.babel'); // babel registration (runtime transpilation for node)

import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../src/config';
import PrettyError from 'pretty-error';
import http from 'http';
import request from 'request';

const pretty = new PrettyError();
const app = express();
const server = new http.Server(app);

/*--------*/
// Configure app login, session, and passport settings
/*--------*/

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

module.exports = app;

/*--------*/
// Connect routes
/*--------*/
require('./routes');

/*--------*/
// Take the setup and start listening!
/*--------*/
if (config.apiPort) {
	const runnable = app.listen(config.apiPort, (err) => {
		if (err) {
			console.error(err);
		}
		console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
		console.info('==> 💻  Send requests to http://localhost:%s', config.apiPort);
	});


} else {
	console.error('==>     ERROR: No PORT environment variable has been specified');
}
