Template.Examples.rendered = function() {
	
};

Template.Examples.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Examples.helpers({

});

