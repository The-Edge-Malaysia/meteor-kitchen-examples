this.App = {};
this.Helpers = {};

Meteor.startup(function() {
	
});

App.logout = function() {
	Meteor.logout(function(err) {
	});
};

Helpers.menuItemClass = function(routeName) {
	if(!routeGranted(routeName)) {
		return "hidden";
	}

	if(!Router.current()) {
		return "";
	}

	if(!Router.routes[routeName]) {
		return "";
	}

	var currentPath = Router.routes[Router.current().route.getName()].handler.path;
	var routePath = Router.routes[routeName].handler.path;

	if(routePath === "/") {
		return currentPath == routePath ? "active" : "";
	}

	return currentPath.indexOf(routePath) === 0 ? "active" : "";
};

Helpers.userFullName = function() {
	var name = "";
	if(Meteor.user() && Meteor.user().profile)
		name = Meteor.user().profile.name;
	return name;
};

Helpers.userEmail = function() {
	var email = "";
	if(Meteor.user() && Meteor.user().profile)
		email = Meteor.user().profile.email;
	return email;
};

Helpers.secondsToTime = function(seconds, timeFormat) {
	return secondsToTime(seconds, timeFormat);
};

Helpers.formatDate = function(date, dateFormat) {
	if(!date) {
		return "";
	}

	var f = dateFormat || "MM/DD/YYYY";

	if(_.isString(date)) {
		if(date.toUpperCase() == "NOW") {
			date = new Date();
		}
		if(date.toUpperCase() == "TODAY") {
			d = new Date();
			date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
		}
	}

	return moment(date).format(f);
};

Helpers.integerToYesNo = function(i) {
	return i ? "Yes" : "No";
};

Helpers.integerToTrueFalse = function(i) {
	return i ? "True" : "False";
};

_.each(Helpers, function (helper, key) {
	Handlebars.registerHelper(key, helper);
});

