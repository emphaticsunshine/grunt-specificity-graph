/*
 * grunt-specificity-graph
 * https://github.com/emphaticsunshine/grunt-specificity-graph
 *
 * Copyright (c) 2015 Mohit Seth
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {

	// Project configuration.
	grunt.initConfig( {
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		// Configuration to be run (and then tested).
		specificity_graph: {
			example: {
				options: {
					openInBrowser: true
				},
				files: [ {
					expand: true,
					src: [ "css/*.css" ],
					out: "specificity_graphs/"
				} ]
			}
		},

		jsbeautifier: {
			options: {
				config: ".jsbeautifyrc"
			},
			default: {
				src: [ "*.js", 'tasks/**/*.js' ]
			}
		},

		// Unit tests.
		nodeunit: {
			tests: [ 'test/*_test.js' ]
		}

	} );

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );
	grunt.loadNpmTasks( 'grunt-jsbeautifier' );

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask( 'test', [ 'clean', 'specificity_graph', 'nodeunit' ] );

	// By default, lint and run all tests.
	grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
