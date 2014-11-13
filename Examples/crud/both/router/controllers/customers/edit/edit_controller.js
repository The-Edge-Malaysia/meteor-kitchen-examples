this.CustomersEditController = RouteController.extend({
	template: "CustomersEdit",
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
			Meteor.subscribe("customer", this.params.customerId)
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customer: Customers.findOne({_id:this.params.customerId}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});