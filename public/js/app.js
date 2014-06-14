/*
 * caffenellecucine.com
 * 2.0.0 | 2014-06-13
 */

$(function () {
	/**
	 * Tries to prevent 'console' errors in browsers that lack a console
	 * @return {[type]} [description]
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


var Caffe = function () {
	/**
	 * Init the app
	 */
	var init = function () {
		console.log('Caffe started');

		Caffe.Menu.init();
	};


	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE
	 * *******************************************************************************************/
	return {
		init : init
	};

}();
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