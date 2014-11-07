Template.CustomersDetails.rendered = function() {
	
};

Template.CustomersDetails.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.CustomersDetails.helpers({

});

Template.CustomersDetailsDetailsForm.rendered = function() {
	
	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format").toLowerCase() || "mm/dd/yyyy";

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[autofocus]").focus();
};

Template.CustomersDetailsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();

		var self = this;

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				

				Router.go("", {});
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();
		Router.go("customers", {});
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();
		Router.go("customers", {});
	}
});

Template.CustomersDetailsDetailsForm.helpers({
});
