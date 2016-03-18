/* // karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '/',
    frameworks: ['jasmine'],
    browsers:['Chrome'],
    plugins:[
      'karma-coverage',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],
    reporters:['progress','coverage'],
    coverageReporter:{
      'type':'html',
      'dir':'code-coverage/'
    },
    files:[ 'src/*.js'],
    htmlReporter: {
      outputFile: 'src/test/unit.html'
    }
  });
};
 */
 module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'src/js/angular.min.js',
      'src/js/angular-cookies.min.js',
      'src/js/angular-mocks.js',
      'src/js/angular-route.min.js',
      'src/js/jquery-2.1.4.min.js',
      'src/js/bootstrap.min.js',
      'src/main.js',
      'src/services.js',
      'src/controllers.js',
      'src/spec.js'
    ],
    plugins:[
      'karma-coverage',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],
    preprocessors:{
      'src/*.js': 'coverage'
    },
    reporters:['progress','coverage'],
    coverageReporter:{
      'type':'html',
      'dir':'code-coverage/'
    }
  });
};