'use strict';

module.exports = function (grunt) {
     grunt.initConfig({
        regarde: {
            fred: {
                files: ['Scripts/**/**.js',
                        'Views/**/**.cshtml',
                        'Content/**/**.css'],
                tasks: ['livereload']
            }
        }
    });

    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('default', ['livereload-start', 'regarde']);
};
