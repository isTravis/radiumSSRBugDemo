import React from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';

export default React.createClass({

	componentWillMount: function() {
		console.log('it will mount...');
	},
	componentDidMount: function() {
		console.log('it mounted!');
	},

	render: function() {
		const metaData = {
			title: 'Not Found'
		};

		return (
			<div className="container">

				<DocumentMeta {...metaData} />

				<h1>Doh! 404!</h1>
				<Link to={`/explore`}><h2>Go Home</h2></Link>
				<p>That page does not seem to exist!</p>
			</div>
			
		);
	}
});
