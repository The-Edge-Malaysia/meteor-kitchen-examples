Template.CoolPage.rendered = function() {
	
};

Template.CoolPage.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.CoolPage.helpers({

});

Template.CoolPageSideMenu.rendered = function() {
	
};

Template.CoolPageSideMenu.events({

});

Template.CoolPageSideMenu.helpers({

});
