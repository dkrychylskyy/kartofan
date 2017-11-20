module.exports = function (grunt) {
    "use strict";

    // Config...
    grunt.initConfig({
        pkg: grunt.file.readJSON('package-lock.json'),
        watch: {
            scripts: {
                files: ['./js/**/*.js', '!./js/kartofan.gen.js'],
                tasks: ['jshint', 'concat:kartofan']
            }
        },
        concat: {
            kartofan: {
                src: ['./js/kartofan/**/*.js', '!./js/kartofan/kartofan.gen.js'],
                dest: './js/kartofan.gen.js'
            }
        },
        jshint: {
            options: {
                // jshintrc: '.jshintrc'
            },
            all: [
                'js/**/*.js',
                '!js/**/*.gen.js',
                '!js/**/vendor/*.js'
            ]
        },
    });
    // Load tasks...
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task.
    grunt.registerTask('default', 'watch');
};
