this.InvoicesInsertController = RouteController.extend({
	template: "InvoicesInsert",
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
			Meteor.subscribe("invoices_empty")
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoices_empty: Invoices.findOne({_id:null}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});