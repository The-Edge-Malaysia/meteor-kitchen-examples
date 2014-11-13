Metadata.allow({
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

Metadata.before.insert(function(userId, doc) {
	
});

Metadata.before.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Metadata.before.remove(function(userId, doc) {
	
});

Metadata.after.insert(function(userId, doc) {
	
});

Metadata.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Metadata.after.remove(function(userId, doc) {
	
});
