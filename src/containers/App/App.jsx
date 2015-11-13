import React, { PropTypes } from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

const App = React.createClass({

	render: function() {
		return (
			<div> 
				
				<h1 style={styles.header}>Hello App Wrapper</h1>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}

});

export default connect( state => {
	return {
	};
})( Radium(App) );


const styles = {
	header: {
		color: 'red',
	}
};


