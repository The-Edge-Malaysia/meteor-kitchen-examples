this.InvoicesDetailsController = RouteController.extend({
	template: "InvoicesDetails",
	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},
	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},
	action: function() {
		this.redirect('invoices.details.items', this.params || {});
		/*ACTION_FUNCTION*/
	},
	waitOn: function() {
		return [
			Meteor.subscribe("customers"),
			Meteor.subscribe("invoice_details", this.params.invoiceId)
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoice_details: Invoices.findOne({_id:this.params.invoiceId}, {transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});