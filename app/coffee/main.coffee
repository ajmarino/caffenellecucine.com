require.config
	paths : 
		'jquery'    : 'vendor/jquery/dist/jquery',
		'jquery-ui' : 'vendor/jquery-ui/dist/jquery-ui.min'


require ['jquery', 'jquery-ui'], ($, UI) ->

	method = undefined
	noop = ->

	methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"]
	length = methods.length
	console = (window.console = window.console or {})
	while length--
		method = methods[length]

		# Only stub undefined methods.
		console[method] = noop  unless console[method]


	console.log $
	console.log UI