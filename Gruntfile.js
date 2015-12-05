
/**
 * Created by justinbennett on 2015-12-05.
 */
module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.read('package.json'),

        copy: {
            font: {
                expand: true,
                cwd: 'bower_components/font-awesome/fonts/',
                src: '**',
                dest: 'dist/fonts/',
                flatten: true
            },

            lib_css: {
                expand: true,
                cwd: 'bower_components/',
                src: [
                    'bootstrap/dist/css/bootstrap.css',
                    'font-awesome/css/font-awesome.css'
                    ],
                dest: 'dist/css/',
                flatten: true
            },

            my_css: {
                expand: true,
                cwd: 'css/',
                src: 'main.css',
                dest: 'dist/css/',
                flatten: true
            },

            index: {
                src: 'index.html',
                dest: 'dist/'
            },

            lib_js: {
                expand: true,
                cwd: 'bower_components/',
                src: [
                    'jquery/dist/jquery.js',
                    'bootstrap/dist/js/bootstrap.js'

                ],
                dest: 'dist/js/',
                flatten: true
            },

            my_js: {
                expand: true,
                cwd: 'js/',
                src: 'main.js',
                dest: 'dist/js/',
                flatten: true
            }
        },

        // order matters!!!!!!
        uglify: {
            fugly: {
                files:{
                    'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/bootstrap.js', 'dist/js/main.js', '!dist/js/main.min.js']
                }
            }
        },

        cssmin: {
            minimeify: {
                files: {
                    'dist/css/main.min.css': ['dist/css/*', '!dist/css/main.min.js']
                }
            }
        },

        clean: {
            css: ['dist/css/*.css', '!dist/css/*.min.css'],
            js: ['dist/js/*.js', '!dist/js/*min.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default',['copy', 'uglify', 'cssmin', 'clean']);
};

