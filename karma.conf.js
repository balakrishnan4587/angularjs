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
      'src/*.js'
    ]
  });
};