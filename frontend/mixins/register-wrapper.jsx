const React = require("react");
const qwest = require("qwest");
const FormIntermediary = require("./form-intermediary.jsx");

var RegisterWrap = function(componentClass){

	return FormIntermediary(
		["username", "password", "repeatPassword"],
		function(data){
			console.log(data);
			return;
			qwest.post("/api/v1/users", data)
			.then(function(XHR, response){
				console.log("posted", XHR, response);
			}).catch(function(err){
				console.log(err);
			});
		},
		componentClass
	)
		
}

module.exports = RegisterWrap;