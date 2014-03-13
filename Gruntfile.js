'use strict';
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*!\n' +
				'* <%= pkg.name %>\n' +
				'* v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* (c) <%= pkg.author.name %>;' +
				' <%= pkg.license %> License\n' +
				'*/\n'
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/kafka.min.js': 'src/kafka.js'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'src/kafka.js'
			]
		},
        watch: {
            'dev': {
                options: {
                    livereload: true,
                    interrupt: true,
                    spawn: false
                },
                files: [
                    'src/*.js'
                ]
            }
        }
	});

	grunt.registerTask('default', [
        'jshint',
        'watch:dev'
    ]);

    grunt.registerTask('release', [
		'jshint',
		'uglify'
	]);
};
