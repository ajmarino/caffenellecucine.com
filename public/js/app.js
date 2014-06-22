/*
 * caffenellecucine.com
 * 2.0.0 | 2014-06-21
 */

$(function () {
	/**
	 * Tries to prevent 'console' errors in browsers that lack a console
	 */
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
		];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	Caffe.init();
});

/**********************************************************************************************
 * Main App
 * *******************************************************************************************/
var Caffe = function () {
	/**
	 * Init the app
	 */
	var init = function () {
		Caffe.Menu.init();

		$('.btn--view-more').on("click", function () {
			toggleAboutUs();
		});
	};


	/**
	 * Toggles more info in about us section of footer
	 */
	var toggleAboutUs = function () {
		var info = $('.content__block--about-more'),
			btn  = $('.btn--view-more .text'),
			icon = $('.iconic-chevron'),
			iconic = IconicJS();

		if ( info.hasClass('open') ) {
			slideContent(info, "up");
			btn.text('View More');
			icon.attr('data-direction', 'bottom');
		} else {
			slideContent(info, "down");
			btn.text('View Less');
			icon.attr('data-direction', 'top');
		}

		iconic.update('.iconic-chevron');
	};


	/**
	 * Slides content up/down
	 * @param  {object} $item - jQuery object of item to slide
	 * @param  {string} dir   - dir to slide: up/down
	 */
	var slideContent = function ($item, dir) {
		if (dir === "up") {
			$item.slideUp("400", function () {
				$item.removeClass('open');
			});
		} else {
			$item.slideDown("400", function () {
				$item.addClass('open');
			});
		}
	};

	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE
	 * *******************************************************************************************/
	return {
		init         : init,
		slideContent : slideContent
	};

}();
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