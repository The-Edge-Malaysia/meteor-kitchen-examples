this.CustomersInsertController = RouteController.extend({
	template: "CustomersInsert",
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
			Meteor.subscribe("customers_empty")
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers_empty: Customers.findOne({_id:null}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});