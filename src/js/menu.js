/**********************************************************************************************
 * Menu
 * *******************************************************************************************/
Caffe.Menu = function () {
	var init = function () {
		
		$('.btn--nav-toggle').on("click", function () {
			console.log('clicked menu btn');
			toggleNav();
		});
	};


	/**
	 * Shows/Hides the menu on mobile when the btn is clicked
	 */
	var toggleNav = function () {
		var menu = $('.header__nav');

		if ( menu.hasClass('open') ) {
			Caffe.slideContent(menu, "up");
		} else {
			Caffe.slideContent(menu, "down");
		}
	};

	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE - Caffe.Menu.
	 * *******************************************************************************************/
	return {
		init : init
	};

}();