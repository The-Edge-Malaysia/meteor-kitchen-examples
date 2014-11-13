Applications.allow({
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

Applications.before.insert(function(userId, doc) {
	
	if(!doc.ownerId) doc.ownerId = userId;
	if(!doc.data) {
		doc["data"] = {};
	}

	if(_.isObject(doc.data)) {
		var metaData = Metadata.findOne({}, { sort: { version: -1 } });
		if(!metaData) {
			return;
		}

		var meta = metaData.data;
		extendWithMetadata(doc.data, "root", meta);
	}

});

Applications.before.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Applications.before.remove(function(userId, doc) {
	
});

Applications.after.insert(function(userId, doc) {
	
});

Applications.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Applications.after.remove(function(userId, doc) {
	
});
