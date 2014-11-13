Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

if(Meteor.isClient) {
	Router.onBeforeAction(function() {
		// loading indicator here
		if(!this.ready()) {
			$("body").addClass("wait");
		} else {
			$("body").removeClass("wait");
			this.next();
		}
	});
}

Router.map(function () {

	this.route("home", {path: "/", controller: "HomeController"});
	this.route("cool_page", {path: "/cool_page", controller: "CoolPageController"});
	this.route("cool_page.sub_page_a", {path: "/cool_page/sub_page_a", controller: "CoolPageSubPageAController"});
	this.route("cool_page.sub_page_b", {path: "/cool_page/sub_page_b", controller: "CoolPageSubPageBController"});
	this.route("cool_page.sub_page_b.sub_page_b_1", {path: "/cool_page/sub_page_b/sub_page_b_1", controller: "CoolPageSubPageBSubPageB1Controller"});
	this.route("cool_page.sub_page_b.sub_page_b_2", {path: "/cool_page/sub_page_b/sub_page_b_2", controller: "CoolPageSubPageBSubPageB2Controller"});/*ROUTER_MAP*/
});
