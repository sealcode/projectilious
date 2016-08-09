const React = require("react");

module.exports = function(props){
	return (
		<div className="register">
			{props.heading? props.heading : <h2>Register</h2>}
			<form action="/api/v1/users" method="POST" onSubmit={props.onSubmitEvent}>
				<input 
					type="text" 
					name="username" 
					placeholder="login"
					onChange={props.onUsernameChangeEvent}
				/>
				<input 
					type="password" 
					name="password" 
					placeholder="password"
					onChange={props.onPasswordChangeEvent}
				/>
				<input 
					type="password" 
					placeholder="repeat password"
					onChange={props["onRepeatPasswordChangeEvent"]}
				/>
				<input 
					type="submit" 
					value="Register"
				/>
			</form>
		</div>
	);
}