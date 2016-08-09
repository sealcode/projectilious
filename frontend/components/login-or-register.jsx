const React = require("react");

const Tabs = require("../mixins/tabbed.jsx");
const LoginWrapper = require("../mixins/login.jsx");
const LoginForm = require("./login.jsx");
const RegisterWrapper = require("../mixins/register-wrapper.jsx");
const Register = require("./register.jsx");

module.exports = () => React.createElement(Tabs, {
	tabs: [
		{title: "Login", componentClass: LoginWrapper(LoginForm)},
		{title: "Register", componentClass: RegisterWrapper(Register)},
	]
});