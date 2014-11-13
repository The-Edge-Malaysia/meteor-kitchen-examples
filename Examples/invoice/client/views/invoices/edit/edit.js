Template.InvoicesEdit.rendered = function() {
	
};

Template.InvoicesEdit.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.InvoicesEdit.helpers({

});

Template.InvoicesEditEditForm.rendered = function() {
	
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

Template.InvoicesEditEditForm.events({
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
				

				Invoices.update({ _id: t.data.invoice._id }, { $set: values });

				Router.go("invoices", {});
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();
		Router.go("invoices", {});
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.InvoicesEditEditForm.helpers({
});
