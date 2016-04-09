'use strict';

module.exports = {
	example: {
		options: {
			openInBrowser: true
		},
		files: [ {
			expand: true,
			flatten: true,
			src: [ 'css/*.css' ],
			dest: 'specificity_graphs/'
		} ]
	}
};