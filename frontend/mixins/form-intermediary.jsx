const React = require("react");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var FormIntermediary = (field_names, onSubmit, componentClass) => {
	return React.createClass({
		getInitialState: function(){
			let state = {
				field_values: {}
			};
			field_names.forEach((field_name) => {
				state[field_name] = undefined;
			});
			return state;
		},
		onFieldChangeEvent: function(field_name){
			var self = this;
			return function(e){
				self.setFieldValue(field_name, e.target.value);
			}
		},
		setValueFn: function(field_name){
			var self = this;
			return function(value){
				self.setFieldValue(field_name, value);
			}
		},
		setFieldValue: function(field_name, value){
			var self = this;
			let field_values = self.state.field_values;
			field_values[field_name] = value;
			self.setState({field_values: field_values});
		},
		generateProps: function(){
			var self = this;
			let props = {
				values: {},
				onSubmitEvent: self.onSubmitEvent,
			};
			for(let i in field_names){
				let field_name = field_names[i];
				let changeEventHandlerName = "on" + capitalizeFirstLetter(field_name) + "ChangeEvent";
				props[changeEventHandlerName] = self.onFieldChangeEvent(field_name);
				let setValueFnName = "set" + capitalizeFirstLetter(field_name);
				props[setValueFnName] = self.setValueFn(field_name);
				props.values[field_name] = this.state.field_values[field_name];
			}
			return props;
		},
		onSubmitEvent: function(e){
			e.preventDefault();
			let data = {};
			for(var i in field_names){
				data[field_names[i]] = this.state.field_values[field_names[i]];
			};
			onSubmit(data);
		},
		render: function(){
			try{
			var self = this;
			const props = self.generateProps();
			return React.createElement(componentClass, props)
			}catch(error){console.log(error)};
		}
	});

}

module.exports = FormIntermediary;