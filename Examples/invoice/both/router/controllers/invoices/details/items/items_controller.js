this.InvoicesDetailsItemsController = RouteController.extend({
	template: "InvoicesDetails",
	yieldTemplates: {
		'InvoicesDetailsItems': { to: 'InvoicesDetailsSubcontent'}
		/*YIELD_TEMPLATES*/
	},
	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},
	action: function() {
		this.render();
		/*ACTION_FUNCTION*/
	},
	waitOn: function() {
		return [
			Meteor.subscribe("customers"),
			Meteor.subscribe("invoice_details", this.params.invoiceId),
			Meteor.subscribe("invoice_items", this.params.invoiceId)
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoice_details: Invoices.findOne({_id:this.params.invoiceId}, {transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}}),
			invoice_items: InvoiceItems.find({invoiceId:this.params.invoiceId}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});