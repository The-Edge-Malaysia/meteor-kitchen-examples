Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

if(Meteor.isClient) {
	var publicRoutes = ["home_public", "login", "register", "forgot_password", "reset_password"];
	var privateRoutes = ["home_private", "user_settings", "user_settings.change_pass", "logout", "customers", "customers.insert", "customers.details", "customers.edit"];

	var roleMap = [
		
	];

	// this function returns true if user is in role allowed to access given route
	routeGranted = function(routeName) {
		if(!routeName) {
			// route without name - enable access (?)
			return true;
		}

		if(!roleMap || roleMap.length === 0) {
			// this app don't have role map - enable access
			return true;
		}

		var roleMapItem = _.find(roleMap, function(roleItem) { return roleItem.route == routeName; });
		if(!roleMapItem) {
			// page is not restricted
			return true;
		}

		if(!Meteor.user() || !Meteor.user().roles) {
			// user is not logged in
			return false;
		}

		// this page is restricted to some role(s), check if user is in one of allowedRoles
		var allowedRoles = roleMapItem.roles;
		var granted = _.intersection(allowedRoles, Meteor.user().roles);
		if(!granted || granted.length === 0) {
			return false;
		}

		return true;
	};
	
	Meteor.subscribe("current_user_data");

	Router.ensureLogged = function() {
		if(!Meteor.user()) {
			// user is not logged in - redirect to public home
			this.redirect("home_public");
			return;
		} else {
			// user is logged in - check role
			if(!routeGranted(this.route.name)) {
				// user is not in allowedRoles - redirect to private home
				this.redirect("home_private");
				return;				
			}
			this.next();
		}
	};

	Router.ensureNotLogged = function() {
		if(Meteor.user())
			this.redirect("home_private");
		else
			this.next();
	};

	Router.onBeforeAction(function() {
		// loading indicator here
		if(!this.ready()) {
			$("body").addClass("wait");
		} else {
			$("body").removeClass("wait");
			this.next();
		}
	});

	Router.onBeforeAction(Router.ensureNotLogged, {only: publicRoutes});
	Router.onBeforeAction(Router.ensureLogged, {only: privateRoutes});
}

Router.map(function () {
	
	this.route("home_public", {path: "/", controller: "HomePublicController"});
	this.route("login", {path: "/login", controller: "LoginController"});
	this.route("register", {path: "/register", controller: "RegisterController"});
	this.route("forgot_password", {path: "/forgot_password", controller: "ForgotPasswordController"});
	this.route("reset_password", {path: "/reset_password", controller: "ResetPasswordController"});
	this.route("home_private", {path: "/home_private", controller: "HomePrivateController"});
	this.route("user_settings", {path: "/user_settings", controller: "UserSettingsController"});
	this.route("user_settings.change_pass", {path: "/user_settings/change_pass", controller: "UserSettingsChangePassController"});
	this.route("logout", {path: "/logout", controller: "LogoutController"});
	this.route("customers", {path: "/customers", controller: "CustomersController"});
	this.route("customers.insert", {path: "/customers/insert", controller: "CustomersInsertController"});
	this.route("customers.details", {path: "/customers/details/:customerId", controller: "CustomersDetailsController"});
	this.route("customers.edit", {path: "/customers/edit/:customerId", controller: "CustomersEditController"});/*ROUTER_MAP*/
});
