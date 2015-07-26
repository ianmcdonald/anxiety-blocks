module.exports = function(grunt) {
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

        // JavaScript
	    concat: {
	        build: {
		        src:  'assets/dev/js/*.js',
		        dest: 'assets/dev/js/tmp/main.js'
	        }
	    },
        babel: {
            build: {  
                src:  'assets/dev/js/tmp/main.js',
                dest: 'assets/js/main.min.js'
            }
        },
	    uglify: {
	        build: {
		        src:  'assets/js/main.min.js',
		        dest: 'assets/js/main.min.js'
	        }
	    },
        plato: {
            report: {
                src:  'assets/dev/js/*.js',
                dest: 'assets/dev/js/report/'
            }
        },

        // CSS
	    sass: {
	        build: {
		        options: {
		            style: 'compressed'
		        },
                src:  'assets/dev/scss/main.scss',                    
		        dest: 'assets/dev/scss/tmp/main.min.css'		
	        }
	    },
	    autoprefixer: {
	        options: {
		        browsers: [ 'last 8 versions' ]
	        },
	        single_file: {
		        src:  'assets/dev/scss/tmp/main.min.css',
		        dest: 'assets/css/main.min.css'
	        },
	        sourcemap: {
		        options: {
		            map: true
        	    },
        	    src:  'assets/dev/scss/tmp/main.min.css',
		        dest: 'assets/css/main.min.css'
	        }
	    },
        
        // Watch
	    watch: {
	        scripts: {
		        files: 'assets/dev/js/*.js', 
		        tasks: [ 'concat', 'babel', 'uglify' ],
		        options: {
		            spawn: false,
		            livereload: true
		        }
	        },
	        css: {
		        files: [ 'assets/dev/scss/*.scss',
                         'assets/dev/scss/tmp/main.min.css' ],
		        tasks: [ 'sass', 'autoprefixer'	],
		        options: {
		            spawn: false,
		            livereload: true
		        }
	        },
	        html: {
                files: [ '*.html','**/*.html','**/*.css' ],
                options: {
                    livereload: true
                }
            }
	    },

        // Localhost
	    connect: {
	        server: {
		        options: {
		            livereload: true,
		            port: 9000
		        }
	        }
	    }
    });
    
    // Tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', [ 'connect', 'watch' ]);
};
