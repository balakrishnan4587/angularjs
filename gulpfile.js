/* var gulp= require("gulp");
var karma= require("gulp-karma");

var files=[
  'src/*.js'
];

gulp.task('unittest', function(){
  
  return gulp.src([]).pipe(karma({
    configFile:'karma.conf.js',
    action:'run',
    files:files
  })).on('error',function(err){
    throw err;
    });
  
});

 */
 
var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['tdd']);