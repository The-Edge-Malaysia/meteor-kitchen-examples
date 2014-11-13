Template.HomePublic.rendered = function() {
	
};

Template.HomePublic.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.HomePublic.helpers({

});

Template.HomePublicHomeJumbotron.rendered = function() {
	
};

Template.HomePublicHomeJumbotron.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("getting_started", {});
	}
});

Template.HomePublicHomeJumbotron.helpers({

});
















