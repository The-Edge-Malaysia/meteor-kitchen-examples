Template.Contribute.rendered = function() {
	
};

Template.Contribute.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Contribute.helpers({

});

