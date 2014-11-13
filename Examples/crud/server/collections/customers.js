Customers.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return true;
	},

	remove: function (userId, doc) {
		return true;
	}
});

Customers.before.insert(function(userId, doc) {
	
});

Customers.before.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Customers.before.remove(function(userId, doc) {
	
});

Customers.after.insert(function(userId, doc) {
	
});

Customers.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Customers.after.remove(function(userId, doc) {
	
});
