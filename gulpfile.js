var gulp= require("gulp");
var karma= require("gulp-karma");

gulp.task('unittest', function(){
  return gulp.src([]).pipe(karma({
    configFile:'karma.conf.js',
    action:'run'
  })).on('error',function(err){
    throw err;
    });
});
gulp.task('default', ['unittest']);
 
/*var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['tdd']);*/