Customers.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return userId && doc.ownerId == userId;
	},

	remove: function (userId, doc) {
		return userId && doc.ownerId == userId;
	}
});

Customers.before.insert(function(userId, doc) {
	
	if(!doc.ownerId) doc.ownerId = userId;
if(!doc.totalAmount) doc.totalAmount = 0;
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
