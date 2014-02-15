/*
 * caffenellecucine.com
 * 2.0.0 | 2014-02-15
 */

var App = function () {
	
	$(function () {
		init();


	});

	/**
	 * Init the app
	 */
	var init = function () {
		console.log('App started');

		preventConsoleErrors();

		App.Menu.init();
	};


	/**
	 * Tries to prevent 'console' errors in browsers that lack a console
	 * @return {[type]} [description]
	 */
	var preventConsoleErrors = function () {
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
App.Menu = function () {
	var init = function () {
		console.log('Menu loaded');
	};

	/**********************************************************************************************
	 * AVAILABLE TO GLOBAL SCOPE - App.Menu.
	 * *******************************************************************************************/
	return {
		init : init
	};

}();