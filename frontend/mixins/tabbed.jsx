const React = require("react");

module.exports = React.createClass({
	getDefaultProps: function(){
		return {
			tabs: [
				{title: "Default", componentClass: () => <div>Default Tab content</div>}
			]
		}
	},
	getInitialState: function(){
		return {
			active_tab_index: 0
		}
	},
	setTabFn: function(index){
		var self = this;
		return function(){
			self.setState({active_tab_index: index});
		}
	},
	render: function(){	
		try{
		var self = this;
		var tabs = this.props.tabs.map((tab, index) =>
			<div 
				key={index}
				onClick={self.setTabFn(index)}
				className={"tab " + (index==this.state.active_tab_index ? "active" : "inactive")}
			>
				{tab.title}
			</div>
		);
		var contentClass = this.props.tabs[this.state.active_tab_index].componentClass;
		return (
			<div>
				<div className="tabs">{tabs}</div>
				<div className="tab-content">{React.createElement(contentClass)}</div>
			</div>
		)
		}catch(e){console.log(e)}
	}
});