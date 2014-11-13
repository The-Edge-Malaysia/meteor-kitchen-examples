InvoiceItems.allow({
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

InvoiceItems.before.insert(function(userId, doc) {
	
	if(!doc.ownerId) doc.ownerId = userId;
doc.amount = doc.quantity * doc.price;
});

InvoiceItems.before.update(function(userId, doc, fieldNames, modifier, options) {
	
if(!modifier.$set) return;var quantity = modifier.$set.quantity || doc.quantity;var price = modifier.$set.price || doc.price;modifier.$set.amount = quantity * price;
});

InvoiceItems.before.remove(function(userId, doc) {
	
});

InvoiceItems.after.insert(function(userId, doc) {
	
var sum = 0;InvoiceItems.find({ invoiceId: doc.invoiceId }).map(function(item) {sum += item.amount;});Invoices.update({ _id: doc.invoiceId }, { $set: { totalAmount: sum }});
});

InvoiceItems.after.update(function(userId, doc, fieldNames, modifier, options) {
	
var sum = 0;InvoiceItems.find({ invoiceId: doc.invoiceId }).map(function(item) {sum += item.amount;});Invoices.update({ _id: doc.invoiceId }, { $set: { totalAmount: sum }});
});

InvoiceItems.after.remove(function(userId, doc) {
	
var sum = 0;InvoiceItems.find({ invoiceId: doc.invoiceId }).map(function(item) {sum += item.amount;});Invoices.update({ _id: doc.invoiceId }, { $set: { totalAmount: sum }});
});
