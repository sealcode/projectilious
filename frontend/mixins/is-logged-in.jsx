const React = require("react");
const qwest = require("qwest");

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			componentIfTrue: () => <div>Logged In!</div>,
			componentIfFalse: () => <div>Not logged in</div>,
			componentIfLoading: () => <div>Loading...</div>,
		};
	},
	getInitialState: function(){
		return {
			logged_in: undefined,
			user_data: null
		}
	},
	componentDidMount: function(){
		var self = this;
		qwest.get("/api/v1/users/me")
		.then(function(XMLHR, response){
			self.setState({logged_in: true});
		}).catch(function(){
			self.setState({logged_in: false});
		});
	},
	render: function(){
		const props = {
			user_data: this.state.user_data,
			logged_in: this.state.logged_in
		}
		let component_class;
		switch(this.state.logged_in){
			case undefined:
				component_class = this.props.componentIfLoading;
				break;
			case true:
				component_class = this.props.componentIfTrue;
				break;
			case false:
				component_class = this.props.componentIfFalse;
				break;
		}
		console.log("logged_in: ", this.state.logged_in);
		return React.createElement(component_class, props);
	}
});