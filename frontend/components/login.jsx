const React = require("react");

module.exports = function(props){	
	try{
	return (
		<div className="login">
			{props.heading? props.heading : <h2>Log in</h2>}
			<form onSubmit={props.onSubmitEvent} method="POST">
				<input
					type="text"
					name="username"
					placeholder="login" 
					value={props.username}
					onChange={props.onUsernameChangeEvent}
				/>
				<input 
					type="password" 
					name="password" 
					placeholder="password" 
					value={props.password}
					onChange={props.onPasswordChangeEvent}
				/>
				<input type="submit" value="Log in"/>
			</form>
		</div>
	);
	}catch(e){console.log(e)}
};