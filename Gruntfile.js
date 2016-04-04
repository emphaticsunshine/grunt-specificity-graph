/*
 * grunt-specificity-graph
 * https://github.com/emphaticsunshine/grunt-specificity-graph
 *
 * Copyright (c) 2015 Mohit Seth
 * Licensed under the MIT license.
 */

module.exports = function ( grunt ) {
	'use strict';
	// Project configuration.
	grunt.initConfig( {
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js'
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
					src: [ 'css/*.css' ],
					dest: 'specificity_graphs/'
				} ]
			}
		},
		jsbeautifier: {
			options: {
				config: '.jsbeautifyrc'
			},
			'default': {
				src: [ '*.js', 'tasks/**/*.js' ]
			},
			'vefify': {
				src: [ '*.js', 'tasks/**/*.js' ],
				options: {
					'mode': 'VERIFY_ONLY'
				}
			}
		},
		release: {
			options: {
				changelog: true,
				beforeRelease: [ 'jsbeautifier:verify', 'jshint' ]
			}
		}
	} );

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );
	grunt.loadNpmTasks( 'grunt-jsbeautifier' );
	grunt.loadNpmTasks( 'grunt-release' );

	// Whenever the 'test' task is run, first clean the 'tmp' dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask( 'test', [ 'specificity_graph', 'nodeunit' ] );

	// By default, lint and run all tests.
	grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
