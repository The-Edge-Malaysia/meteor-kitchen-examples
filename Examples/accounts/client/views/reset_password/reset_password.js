var pageSession = new ReactiveDict();

pageSession.set("errorMessage", "");

Template.ResetPassword.rendered = function() {
	
};

Template.ResetPassword.events({
	// change password
	'submit #reset_password_form' : function(e, t) {
		e.preventDefault();

		var submit_button = $(t.find(":submit"));
		var new_password = t.find('#new_password').value;
		var new_password_confirm = t.find('#new_password_confirm').value;

		// check password
		var min_password_len = 6;
		if(!isValidPassword(new_password, min_password_len))
		{
			pageSession.set("errorMessage", "Your password must be at least " + min_password_len + " characters long.");
			t.find('#new_password').focus();
			return false;						
		}

		if(new_password != new_password_confirm)
		{
			pageSession.set("errorMessage", "Your password and confirm password doesn't match.");
			t.find('#new_password_confirm').focus();
			return false;
		}

		Accounts.resetPassword(this.resetPasswordToken, new_password, function(err) {
			if (err)
				pageSession.set("errorMessage", err.message);
			else
				pageSession.set("errorMessage", "");
		});

		return false; 
	}
});

Template.ResetPassword.helpers({
	errorMessage: function() {
		return pageSession.get("errorMessage");
	}
});
