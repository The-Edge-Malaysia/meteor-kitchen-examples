Template.VersionHistory.rendered = function() {
	
};

Template.VersionHistory.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.VersionHistory.helpers({

});





