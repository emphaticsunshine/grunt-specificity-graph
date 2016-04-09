'use strict';

module.exports = {
	options: {
		config: '.jsbeautifyrc'
	},
	'default': {
		src: [ '*.js', 'tasks/**/*.js' ]
	},
	'verify': {
		src: [ '*.js', 'tasks/**/*.js' ],
		options: {
			'mode': 'VERIFY_ONLY'
		}
	}
};