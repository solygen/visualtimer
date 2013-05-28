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