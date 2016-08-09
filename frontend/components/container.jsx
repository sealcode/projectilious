const React = require("react");

module.exports = function(props){
	return (
		<div id="top-contianer">
  		  <div className="nav">
			<h1>Projectilious</h1>
			</div>
			{props.children}
		</div>
	)		
};
