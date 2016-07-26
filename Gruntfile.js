module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            // uglify task configuration goes here.
        },

        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.js', '!bower_components/**', '!node_modules/**'],
                    dest: 'dist'
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/scss',
                    src: ['*.scss'],
                    dest: 'app/css/',
                    ext: '.css'
                }]
            }
        },
        sync: {
            main: {
                files: [{
                    cwd: '',
                    src: ['!env.js'],
                    dest: 'dist'
                },
                {
                    cwd: 'app',
                    src: [
                        '**',
                        '!**/*.js',
                        '!**/*.scss',
                        '!**/*.txt',
                        '!bower_components/**',
                        'node_modules/bmc-dpl-iconfont/dist/**/*',
                        'node_modules/bmc-dpl-framework/dist/dpl-components.css',
                        'node_modules/bmc-dpl-framework/dist/dpl-components.js',
                        'node_modules/bmc-dpl-framework/dist/assets/**/*',
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/bootstrap/dist/fonts/**/*',
                        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                        'bower_components/font-awesome/css/**/*',
                        'bower_components/font-awesome/fonts/**/*',
                        'bower_components/html5-boilerplate/dist/css/normalize.css',
                        'bower_components/html5-boilerplate/dist/css/main.css',
                        'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/lodash/dist/lodash.js',
                        'bower_components/restangular/dist/restangular.js',
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/jquery/dist/jquery.min.map',
                        'bower_components/angular-ui-router/release/angular-ui-router.js',
                        'bower_components/angular-animate/angular-animate.js'
                    ],
                    dest: 'dist'
                }],
                pretend: false, // Set it to true for dryrun
                verbose: true
            }
        },
        watch: {
            css: {
                files: 'app/scss/*.scss',
                tasks: ['sass']
            }
        }


    });

    // Default task(s).
    grunt.registerTask('default', ['sass', 'babel', 'sync']);
    grunt.registerTask('dist', ['sass', 'babel', 'sync']);
    grunt.registerTask('build', ['sass', 'babel', 'sync']);

};
