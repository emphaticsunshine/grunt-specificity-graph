/*
 * grunt-specificity-graph
 * https://github.com/emphaticsunshine/grunt-specificity-graph
 *
 * Copyright (c) 2015 Mohit Seth
 * Licensed under the MIT license.
 */

module.exports = function ( grunt ) {
	'use strict';
	require( 'load-grunt-config' )( grunt, {
		loadGruntTasks: 'grunt-*',
		config: require( './package.json' ),
		scope: 'devDependencies'
	} );

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );
};
