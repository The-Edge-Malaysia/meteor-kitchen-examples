Template.ObjectReference.rendered = function() {
	$('table').addClass('table');
};

Template.ObjectReference.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.ObjectReference.helpers({

});


Template.ObjectReferenceSidebar.rendered = function() {
	
};

Template.ObjectReferenceSidebar.events({

});

Template.ObjectReferenceSidebar.helpers({

});
