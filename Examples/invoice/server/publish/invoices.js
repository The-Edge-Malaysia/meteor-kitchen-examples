Meteor.publish("invoices", function() {
	return Invoices.find({ownerId:this.userId}, {});
});

Meteor.publish("invoice_list", function() {
	return Invoices.find({ownerId:this.userId}, {sort:{invoiceNumber:-1},transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}});
});

Meteor.publish("invoices_empty", function() {
	return Invoices.find({_id:null,ownerId:this.userId}, {});
});

Meteor.publish("invoice_details", function(invoiceId) {
	return Invoices.find({_id:invoiceId,ownerId:this.userId}, {transform:function(doc) {var customer = Customers.findOne({_id: doc.customerId });if(customer) doc.customerName = customer.name;return doc;}});
});

Meteor.publish("invoice", function(invoiceId) {
	return Invoices.find({_id:invoiceId,ownerId:this.userId}, {});
});

