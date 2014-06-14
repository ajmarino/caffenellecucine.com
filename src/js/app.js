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