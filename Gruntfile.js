module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        pkg: pkg,

        jshint:  require('./grunt/config/jshint.js'),
        concat: require('./grunt/config/concat.js'),
        copy: require('./grunt/config/copy.js'),
        uglify: require('./grunt/config/uglify.js'),

        //currently doesn't work realiable
        /*bower: {
            options: {
                targetDir: 'vendors'
            },
            install: {
               //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },*/

        clean: ["./vendors"],


        htmlmin: {
            dist: {
              options: {
                removeComments: true,
                collapseWhitespace: true
              },
              files: {
                'builds/website/index.html': 'builds/website/index.html'
              }
            }
        },

        watch: {
            files: '<%= jshint.files %>',
            tasks: 'jshint'
        }

    });

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //after installing latest shit with bower run this task to copy relevant files to lib
    grunt.registerTask('build:libs', ['copy:update'/*, 'clean'*/]);

    // is called without any further parameter.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);
    grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'copy']);

    //create build for website
    grunt.registerTask('build:website', ['copy:website', 'htmlmin']);

};