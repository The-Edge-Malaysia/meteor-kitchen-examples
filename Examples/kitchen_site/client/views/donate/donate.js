Template.Donate.rendered = function() {
	
};

Template.Donate.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Donate.helpers({

});

