import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {App, NotFound} from 'containers';

export default () => {
	console.log('in routes');
	return (
		<Route path="/" component={App}>
		
			{ /* Home (main) route */ }

			{ /* Catch all route */ }
			<Route path="*" component={NotFound} status={404} />

		</Route>
	);

};
