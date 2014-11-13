this.InvoicesDetailsEditController = RouteController.extend({
	template: "InvoicesDetails",
	yieldTemplates: {
		'InvoicesDetailsEdit': { to: 'InvoicesDetailsSubcontent'}
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
			Meteor.subscribe("invoice_item", this.params.itemId)
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoice_details: Invoices.findOne({_id:this.params.invoiceId}, {transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}}),
			invoice_item: InvoiceItems.findOne({_id:this.params.itemId}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});