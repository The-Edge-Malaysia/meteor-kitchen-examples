Template.InvoicesDetailsEdit.rendered = function() {
	
};

Template.InvoicesDetailsEdit.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.InvoicesDetailsEdit.helpers({

});

Template.InvoicesDetailsEditEditForm.rendered = function() {
	
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

Template.InvoicesDetailsEditEditForm.events({
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
				

				InvoiceItems.update({ _id: t.data.invoice_item._id }, { $set: values });

				Router.go("invoices.details", {invoiceId: self.params.invoiceId});
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();
		Router.go("invoices.details", {invoiceId: this.params.invoiceId});
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

Template.InvoicesDetailsEditEditForm.helpers({
});
