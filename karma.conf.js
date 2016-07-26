module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/restangular/dist/restangular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/*.js',
      'app/banner/**/*.js',
      'app/components/**/*.js',
      'app/model/BaseObject.js',
      'app/model/**/*.js',
      'app/views/**/*.js'
    ],

    preprocessors: {
        'app/!(*test).js': ['babel', 'coverage'],
        'app/*test.js': ['babel'],
        'app/banner/**/!(*test).js': ['babel', 'coverage'],
        'app/banner/**/*test.js': ['babel'],
        'app/components/**/!(*test).js': ['babel', 'coverage'],
        'app/components/**/*test.js': ['babel'],
        'app/model/**/!(*test).js': ['babel', 'coverage'],
        'app/model/**/*test.js': ['babel'],
        'app/views/**/!(*test).js': ['babel', 'coverage'],
        'app/views/**/*test.js': ['babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-istanbul-reporter',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // coverage reporter generates the coverage 
    reporters: ['progress', 'junit', 'coverage'],

    // optionally, configure the reporter 
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type : 'html', subdir : 'html' },
        { type : 'cobertura', subdir : 'cobertura' }
      ]
    }

  });
};
