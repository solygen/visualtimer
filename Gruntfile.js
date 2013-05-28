module.exports = function (grunt) {

    'use strict';

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

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
                dest: '<%= pkg.name %>.min.js'
            }
        },

        //and minified (source and destination files)
        uglify: {
            options: {
                banner: '/* <%= pkg.name %>.<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) <%= pkg.repository.url %> */'
            },
            dist: {
                src: ['<%= concat.js.dest %>'],
                dest: '<%= concat.js.dest %>'
            }
        },

        //copy files to bin (1. same name, 2. name with current version)
        copy: {
            main: {
                files: [
                        {
                        expand: true,
                        src: ['<%= concat.js.dest %>'],
                        dest: 'bin/',
                        filter: 'isFile',
                        rename: function(dest, src) {
                            return dest + src.replace('.min.js', '.<%= pkg.version %>.min.js')
                        }
                    },
                        {
                        expand: true,
                        src: ['<%= concat.js.dest %>'],
                        dest: 'bin/',
                        filter: 'isFile'
                    }
                ]
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
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // This is the default task being executed if Grunt
    // is called without any further parameter.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);

};