Invoices.allow({
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

Invoices.before.insert(function(userId, doc) {
	
	if(!doc.ownerId) doc.ownerId = userId;
if(!doc.totalAmount) doc.totalAmount = 0;
});

Invoices.before.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Invoices.before.remove(function(userId, doc) {
	
});

Invoices.after.insert(function(userId, doc) {
	
});

Invoices.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Invoices.after.remove(function(userId, doc) {
	
});
