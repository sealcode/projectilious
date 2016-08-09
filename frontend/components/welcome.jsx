const React = require("react");

const IsLoggedIn = require("../mixins/is-logged-in.jsx");
const LoginOrRegister = require("./login-or-register.jsx");

module.exports = function(){
	return (
		<div>
			<h2>Welcome!</h2>
			<p><code>Projectilious</code> (name subject to change) is a simple project management app that lets you see who is assigned to what project and what are the projects' deadlines</p>
			<IsLoggedIn
				componentIfFalse={LoginOrRegister}
			/>
		</div>
	)
}