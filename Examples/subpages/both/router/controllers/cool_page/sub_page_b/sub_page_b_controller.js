this.CoolPageSubPageBController = RouteController.extend({
	template: "CoolPage",
	yieldTemplates: {
		'CoolPageSubPageB': { to: 'CoolPageSubcontent'}
		/*YIELD_TEMPLATES*/
	},
	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},
	action: function() {
		this.redirect('cool_page.sub_page_b.sub_page_b_1', this.params || {});
		/*ACTION_FUNCTION*/
	},
	waitOn: function() {
		return [
		];
		/*WAIT_FUNCTION*/
	},
	data: function() {
		return {
			params: this.params || {}
		};
		/*DATA_FUNCTION*/
	},
	onAfterAction: function() {
	}
});