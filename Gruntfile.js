module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),

		/**
		 * Creates a banner at the top of compiled files
		 * can use keywords from pkg
		 */
		banner : "/*\n" +
				 " * <%= pkg.name %>\n" +
				 " * <%= pkg.version %> | <%= grunt.template.today('yyyy-mm-dd') %>\n" +
				 " */\n",

		/**
		 * Deletes old versions of files to help with cache busting, at least i think so
		 */
		clean : {
			js : ['public/js/app.js', 'public/js/app.min.js', 'public/js/app.min.map'],
			sass : ['public/css/main.css', 'public/css/main.min.css']
		},
		
		/**
		 * Combines all js files into a single file
		 */
		concat : {
			options : {
				seperator : ";",
				banner : "<%= banner %>\n"
			},
			js : {
				src : ["src/js/*.js"],
				dest : "public/js/app.js"	
			}
		},


		/**
		 * Validates our JS with JSHint
		 *   curly   : Requires bracers around loops and conditionals
		 *   es3     : Code needs to adhere to ECMAScript 3 specification. Useful for older browers like IE 6/7/8/9
		 *   eqeqeq  : Forces '===' and '!==' instead of '==' and '!='
		 *   undef   : Prohibits the use of explicitly undeclared variables.
		 *   unsused : Warns when you define and never use your variables.
		 *   browser : Defines globals exposed by modern browsers: all the way from good old document and navigator to the HTML5 FileReader and others
		 *   devel   : Defines globals that are usually used for logging poor-man's debugging: console, alert, etc.
		 *   globals : Defines globals loaded outside of app.js
		 */
		jshint: {
			options : {
				jshintrc : ".jshintrc"
			},
			target: {
				src: ['src/js/*.js']
			}
		},


		/**
		 * Combines, minifies, and creates a source map for the js files
		 * dev - main js files
		 * scrollbar - 3 librarys used to create stylized scrollbar in modals
		 */
		uglify : {
			dev : {
				options : {
					mangle : true,
					compressed : true,
					banner : "<%= banner %>",
					sourceMap : "app.map",
				},
				files : {
					"public/js/app.min.js" : ["src/js/*.js"]
				}
			}
		},

		/**
		 * Compiles sass files
		 * only need to compile 1 file as that should include everything else
		 */
		sass : {
			dist : {
				options : {
					style : "compact",
					banner : "<%= banner %>"
				},
				files : {
					"public/css/main.css" : "src/sass/main.scss"
				}
			}
		},

		/**
		 * Checks css against Can I Use and adds/removes vendor prefixes as needed
		 */
		autoprefixer : {
			main : {
				options : {
					browsers : ['last 2 versions', 'ie 9']
				},
				src : "public/css/main.css"
			}
		},

		/**
		 * Optimizes and minifies css
		 * CSSO - http://bem.info/tools/optimizers/csso/description/
		 * Grunt-Csso - https://npmjs.org/package/grunt-csso
		 */
		csso : {
			minify : {
				options : {
					report : 'min',
					banner : '<%= banner %>'
				},
				files : {
					'public/css/main.min.css' : ['public/css/main.css']
				}
			}
		},

		/**
		 * Watches files in /src for changes and runs the appriopate tasks
		 */
		watch : {
			scripts : {
				files : ["src/js/*.js"],
				tasks : ["js"]
			},
			sass : {
				files : ["src/sass/main.scss", "src/sass/**/*.scss"],
				tasks : ["css"]
			}
		},

	});


	/**
	 * Custom task that runs other tasks defined in initConfig
	 */
	grunt.registerTask("default", ['css', 'js']);
	grunt.registerTask("js", ['clean:js', 'concat', 'uglify:dev', 'jshint', 'cache-bust:js']);
	grunt.registerTask("css", ['sass', 'autoprefixer', 'csso', 'cache-bust:css']);


	/**
	 * Creates a hash out of the compiled js or css file whenever they are changed
	 */
	grunt.registerTask('cache-bust', 'Updates asset-version.txt whenever a src js or sass file changes', function (type) {
		if (type === "css") {
			var source = grunt.file.read("public/css/main.css");
		} else {
			var source = grunt.file.read("public/js/app.js");
		}

		var hash = require('crypto').createHash('sha1').update(source).digest('hex').substr(0, 10);

		grunt.file.write("public/assets-version.txt", hash);
		grunt.log.ok("Updated cache busting to " + hash);
	});

	

	/**
	 * 
	grunt.registerTask('fix-sourcemap', function () {
		grunt.log.subhead("Moving UglifyJS Sourcemap");

		grunt.file.copy("app.map", "htdocs/js/app.map");
		grunt.log.ok("Moved app.map to /htdocs/js");

		grunt.file.delete("app.map");
		grunt.log.error("Deleted app.map from /");
	});*/



	/**
	 * Different ways to log output
	 
	grunt.registerTask("logs", function () {
		// Bolds line to create heading
		grunt.log.subhead("All the Logs");

		// Normal output without a line break
		grunt.log.write("no linebreak after this line");

		// Normal output with a line break
		grunt.log.writeln("linebreak after this");

		// Error output with red >>
		grunt.log.error("this is an error");

		// Success output with green >>
		grunt.log.ok("everything is ok");
	});*/


	/**
	 * Ways to display errors when writing custom tasks
	 
	grunt.registerTask("errors", function () {
		// Normal output
		grunt.log.writeln("first line");

		// Gives an Warning that stops execution, bypass with --force
		grunt.fail.warn("second line");

		// Normal output
		grunt.log.writeln("third line");

		// Fatal error that can be bypassed
		grunt.fail.fatal("fourth line");

		// Normal output
		grunt.log.writeln("fifth line");
	});*/
};
