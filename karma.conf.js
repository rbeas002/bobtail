// Karma configuration

module.exports = function(config) {
  configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.coffee': ['coffee']
    },
    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: true
      }
    },

    // list of files / patterns to load in the browser
    files: [
      'bower_components/underscore/underscore.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/es5-shim/es5-shim.js',
      'bower_components/es6-shim/es6-shim.js',
      'src/*.coffee',
      'src/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.coffee',
      'test/*.js'
    ],

    // list of files to exclude
    exclude: ['test/nodeTest.js'],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    browsers: ['Chrome'],
    plugins: ['karma-coffee-preprocessor', 'karma-chrome-launcher', 'karma-jasmine'],
    customLaunchers: {
      Chrome_travis_ci: {base: 'Chrome', flags: ['--no-sandbox']}
    },

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  };

  if (process && process.env && process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
