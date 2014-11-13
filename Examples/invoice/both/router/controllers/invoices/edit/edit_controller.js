this.InvoicesEditController = RouteController.extend({
	template: "InvoicesEdit",
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
			Meteor.subscribe("invoice", this.params.invoiceId)
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {},
			customers: Customers.find({}, {}),
			invoice: Invoices.findOne({_id:this.params.invoiceId}, {})
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});