this.InvoicesDetailsInsertController = RouteController.extend({
	template: "InvoicesDetails",
	yieldTemplates: {
		'InvoicesDetailsInsert': { to: 'InvoicesDetailsSubcontent'}
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
			Meteor.subscribe("invoice_items_empty")
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoice_details: Invoices.findOne({_id:this.params.invoiceId}, {transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}}),
			invoice_items_empty: InvoiceItems.findOne({_id:null}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});