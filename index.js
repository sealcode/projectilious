var path = require("path");
var Sealious = require("sealious");

Sealious.init();

var www_server = Sealious.ChipManager.get_chip("channel", "www_server");
www_server.static_route(path.resolve(module.filename, "../public"), "")

var OrganizationMembership = new Sealious.ResourceType({
	name: "organization-memberships",
	fields: [
		{name: "user", type: "single_reference", params: {resource_type: "user"}},
		{name: "org", type: "single_reference", params: {resource_type: "organizations"}}
	],
	access_strategy: {
		default: "logged_in"
	}
});

var Organization = new Sealious.ResourceType({
	name: "organizations",
	fields: [
		{name: "name", type: "text"}
	],
	access_strategy: {
		default: "logged_in"
	}
});

var Project = new Sealious.ResourceType({
	name: "projects",
	fields: [
		{name: "title", type: "text"}
	],
	access_strategy: {
		default: "logged_in"
	}
});

Sealious.start();
