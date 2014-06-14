/**********************************************************************************************
 * Menu
 * *******************************************************************************************/
Caffe.Menu = function () {
	var init = function () {
		console.log('Menu loaded');

		$('.nav__toggle').on("click", function () {
			toggleNav();
		});
	};

	var toggleNav = function () {
		var menu = $('.header__nav');

		if ( menu.hasClass('open') ) {
			menu.slideUp("400", function () {
				menu.removeClass('open');
			});
		} else {
			menu.slideDown("400", function () {
				menu.addClass('open');
			});
		}
	};

	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE - Caffe.Menu.
	 * *******************************************************************************************/
	return {
		init : init
	};

}();