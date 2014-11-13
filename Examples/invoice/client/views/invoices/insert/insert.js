Template.InvoicesInsert.rendered = function() {
	
};

Template.InvoicesInsert.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.InvoicesInsert.helpers({

});

Template.InvoicesInsertInsertForm.rendered = function() {
	
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

Template.InvoicesInsertInsertForm.events({
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
				

				newId = Invoices.insert(values);

				Router.go("invoices.details", {invoiceId: newId});
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

Template.InvoicesInsertInsertForm.helpers({
});
