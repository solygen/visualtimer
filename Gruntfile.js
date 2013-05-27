module.exports = function (grunt) {

    'use strict';

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        // A list of files, which will be syntax-checked by JSHint
        jshint: {
            files: ['lib/*.js'],
            //https://github.com/gruntjs/grunt-contrib-jshint/blob/master/docs/jshint-examples.md
            options: {
                bitwise: false,
                browser: true,
                debug: true,
                devel: true,
                eqeqeq: true,
                evil: true,
                forin: false,
                immed: true,
                loopfunc: false,
                nomen: false,
                onevar: false,
                plusplus: false,
                regexp: false,
                regexdash: true,
                shadow: true,
                strict: true,
                trailing: true,
                undef: true,
                validthis: true,
                white: true,
                predef: ['$']
            }
        },

        // Files to be concatenated (source and destination files)
        concat: {
            js: {
                src: ['lib/*.js'],
                dest: 'jq-visualtimer.min.js'
            }
        },

        //and minified (source and destination files)
        uglify: {
            dist: {
                src: ['<%= concat.js.dest %>'],
                dest: 'jq-visualtimer.min.js'
            }
        }

    });

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // This is the default task being executed if Grunt
    // is called without any further parameter.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};