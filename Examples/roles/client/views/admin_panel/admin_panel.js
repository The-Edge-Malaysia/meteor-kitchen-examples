Template.AdminPanel.rendered = function() {
	
};

Template.AdminPanel.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.AdminPanel.helpers({

});
