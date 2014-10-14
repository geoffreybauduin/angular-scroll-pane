module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            timestamp: new Date().toISOString()
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= vars.timestamp %> */\n',
                mangle: true
            },
            dist: {
                files: {
                    'dist/angular-jscrollpane.min.js': ["dist/angular-jscrollpane.js"]
                }
            }
        },
        coffee: {
  			compile: {
			    files: {
			    	'dist/angular-jscrollpane.js': "src/jscrollpane.coffee"
			    }
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('build', ['coffee:compile', 'uglify']);


};