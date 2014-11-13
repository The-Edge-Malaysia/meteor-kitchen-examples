var pageSession = new ReactiveDict();

Template.Home.rendered = function() {
	
};

Template.Home.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Home.helpers({

});




	Template.ExamplePlugin2.events({
		"click button": function(e, t) {
			e.preventDefault();
			var clickCounter = pageSession.get("clickCounter") || 0;
			clickCounter++;
			pageSession.set("clickCounter", clickCounter);
		}
	});

	Template.ExamplePlugin2.helpers({
		"clickCounter": function() { return pageSession.get("clickCounter") || 0; }
	});

