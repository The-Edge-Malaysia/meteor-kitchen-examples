this.InvoicesController = RouteController.extend({
	template: "Invoices",
	yieldTemplates: {
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
			Meteor.subscribe("invoice_list")
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoice_list: Invoices.find({}, {sort:{invoiceNumber:-1},transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});