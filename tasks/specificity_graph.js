/*
 * grunt-specificity-graph
 * https://github.com/emphaticsunshine/grunt-specificity-graph
 *
 * Copyright (c) 2015 Mohit Seth
 * Licensed under the MIT license.
 */

module.exports = function ( grunt ) {
	'use strict';

	var specificityGraph = require( 'specificity-graph' );
	var path = require( 'path' );
	var opn = require( 'opn' );
	var async = require( 'async' );

	grunt.registerMultiTask( 'specificity_graph', 'Generate CSS specificity graphs using grunt.', function () {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options( {
			punctuation: '.',
			separator: ', '
		} );
		var done = this.async();
		var fileCount = this.files.length;
		var processedCount = 0;
		// Iterate over all specified file groups.
		this.files.forEach( function ( f ) {
			// loop through src
			var destDir = f.dest;

			if ( destDir ) {

				async.eachSeries( f.src, function ( filepath, callback ) {
					if ( !grunt.file.exists( filepath ) ) {
						grunt.log.warn( 'Source file "' + filepath + '" not found.' );
						callback( filepath, 'File not found' );
					} else {
						try {
							var css = grunt.file.read( filepath );
							specificityGraph( destDir, css, callback );
						} catch ( err ) {
							callback( filepath, err );
						}
					}
				}, function ( directory, err ) {
					var parentDir;
					processedCount++;
					if ( err ) {
						grunt.log.error( grunt.util.error( 'Error:', err ) );
					} else {
						grunt.log.ok( 'Files generated in ' + directory );
						if ( processedCount >= fileCount ) {
							if ( options.openInBrowser ) {
								parentDir = path.resolve( destDir, '../' );
								opn( parentDir, {
									app: 'google chrome',
									wait: false
								}, function ( err ) {
									if ( err ) {
										opn( parentDir );
									}
								} );
							}
							done();
						}
					}
				} );
			} else {
				grunt.log.fail( 'Destination directory not provided' );
			}
		} );
	} );

};
