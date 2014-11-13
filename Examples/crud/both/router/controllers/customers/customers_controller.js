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
			Meteor.subscribe("customers")
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});