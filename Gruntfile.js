'use strict';

module.exports = function (grunt) {
    var webapplication = '_folder_';

    grunt.initConfig({
        regarde: {
            fred: {
                files: [webapplication + '/Scripts/**/**.js',
                        webapplication + '/Views/**/**.cshtml',
                        webapplication + '/Content/**/**.css'],
                tasks: ['livereload']
            }
        }
    });

    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('default', ['livereload-start', 'regarde']);
};