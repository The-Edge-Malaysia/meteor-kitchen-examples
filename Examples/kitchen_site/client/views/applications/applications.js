Template.Applications.rendered = function() {
	
};

Template.Applications.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Applications.helpers({

});
