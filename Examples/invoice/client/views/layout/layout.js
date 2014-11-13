Template.layout.rendered = function() {
	// scroll to anchor
	$('body').on('click', 'a', function(e) { 
		var href = $(this).attr("href");
		if(!href) {
			return;
		}
		if(href.length > 1 && href.charAt(0) == "#") {
			var hash = href.substring(1);
			if(hash) {
				e.preventDefault();

				var offset = $('*[id="' + hash + '"]').offset();

				if (offset) {
					$('html,body').animate({ scrollTop: offset.top - 50 }, 400);
				}
			}
		} else {
			if(href.indexOf("http://") != 0 && href.indexOf("https://") != 0 && href.indexOf("#") != 0) {
				$('html,body').scrollTop(0);
			}
		}
	}); 
	/*TEMPLATE_RENDERED_CODE*/
};

Template.PublicLayoutLeftMenu.rendered = function() {
	
};

Template.PublicLayoutLeftMenu.events({

});

Template.PublicLayoutLeftMenu.helpers({

});

Template.PublicLayoutRightMenu.rendered = function() {
	
};

Template.PublicLayoutRightMenu.events({

});

Template.PublicLayoutRightMenu.helpers({

});

Template.PrivateLayoutLeftMenu.rendered = function() {
	
};

Template.PrivateLayoutLeftMenu.events({

});

Template.PrivateLayoutLeftMenu.helpers({

});

Template.PrivateLayoutRightMenu.rendered = function() {
	
};

Template.PrivateLayoutRightMenu.events({

});

Template.PrivateLayoutRightMenu.helpers({

});
