const React = require("react");
const qwest = require("qwest");
const FormIntermediary = require("./form-intermediary.jsx");

module.exports = function(componentClass){

	return FormIntermediary(
		["username", "password"],
		function(data){
			qwest.post("/api/v1/sessions", data)
			.then(function(XHR, response){
				console.log("posted", XHR, response);
			}).catch(function(err){
				console.log(err);
			});
		},
		componentClass
	)
		
}