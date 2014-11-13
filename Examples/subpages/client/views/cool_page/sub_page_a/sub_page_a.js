Template.CoolPageSubPageA.rendered = function() {
	
};

Template.CoolPageSubPageA.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.CoolPageSubPageA.helpers({

});

