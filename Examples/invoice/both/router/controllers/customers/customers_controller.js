this.CustomersController = RouteController.extend({
	template: "Customers",
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
			Meteor.subscribe("invoices"),
			Meteor.subscribe("customer_list")
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			invoices: Invoices.find({}, {}),
			customer_list: Customers.find({}, {transform:function(doc) {var sum = 0;Invoices.find({ customerId: doc._id }).map(function(item) {sum += item.totalAmount;});doc.totalAmount = sum;return doc;}})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});