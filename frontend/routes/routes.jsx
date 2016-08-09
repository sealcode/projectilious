const React = require("react");
import { Router, Route, Link, IndexRoute } from 'react-router';
const hashHistory = Router.hashHistory;

const Projectilious = require("../components/projectilious.jsx");

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Projectilious.Container}>
			<IndexRoute component={Projectilious.Welcome}/>
		</Route>
	</Router>
)
