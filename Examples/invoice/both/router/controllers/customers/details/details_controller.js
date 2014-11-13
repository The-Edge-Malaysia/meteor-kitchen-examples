this.CustomersDetailsController = RouteController.extend({
	template: "CustomersDetails",
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
			Meteor.subscribe("customer_details", this.params.customerId)
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customer_details: Customers.findOne({_id:this.params.customerId}, {transform:function(doc) {var sum = 0;Invoices.find({ customerId: doc._id }).map(function(item) {sum += item.totalAmount;});doc.totalAmount = sum;return doc;}})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});