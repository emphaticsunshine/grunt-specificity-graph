/*
 * grunt-specificity-graph
 * https://github.com/emphaticsunshine/grunt-specificity-graph
 *
 * Copyright (c) 2015 Mohit Seth
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {

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
		// Iterate over all specified file groups.
		this.files.forEach( function ( f ) {
			// loop through src
			var destDir = f.out;
			if ( destDir ) {
				async.eachSeries( f.src, function ( filepath, nextFile ) {
					if ( !grunt.file.exists( filepath ) ) {
						grunt.log.warn( 'Source file "' + filepath + '" not found.' );
						nextFile();
					} else {
						try {
							var css = grunt.file.read( filepath );
							var baseName = path.basename( filepath, '.css' );
              var fullDestiNation = path.join(destDir, baseName);
							if ( !grunt.file.exists( fullDestiNation ) ) {
								grunt.file.mkdir( fullDestiNation );
							}
							specificityGraph( fullDestiNation, css, function ( directory ) {
								grunt.log.ok( 'specificity-graph files created in ' + directory );
								nextFile();
							} );
						} catch ( err ) {
							grunt.log.error( grunt.util.error( 'Error:', err ) );
						}
					}
				}, function () {
          done();
					if ( options.openInBrowser ) {
						opn( destDir, {
							app: 'google chrome',
							wait: false
						}, function ( err ) {
							if ( err ) {
								opn( destDir );
							}
						} );
					}
				} );
			} else {
				grunt.log.fail( 'Destination directory not provided' );
			}
		} );
	} );

};
