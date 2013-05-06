module.exports = function(grunt) {

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        // A list of files, which will be syntax-checked by JSHint
        jshint: {
            files: ['Gruntfile.js', 'jq-vt.js'],
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
                src: ['jq-vt.js'],
                dest: 'jq-vt-conc.js'
            }
        },

        //and minified (source and destination files)
        uglify: {
            dist: {
                src: ['<%= concat.js.dest %>'],
                dest: 'jq-vt-conc.min.js'
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
    grunt.loadNpmTasks('grunt-contrib-watch');


    // This is the default task being executed if Grunt
    // is called without any further parameter.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};