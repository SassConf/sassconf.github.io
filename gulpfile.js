var gulp = require('gulp');
var bower = require('bower');
var bowerFiles = require('main-bower-files');
var del = require('del');


/* paths and directories */
var paths = {
  templates: '**/*.{jade, md}',
  css: 'assets/stylesheets/*.css',
  sass: ['assets/stylesheets/**/*.scss', 'assets/stylesheets/*.scss'],
  images: 'assets/stylesheets/img/**/*',
  js: 'assets/js/**/*.js',
  fonts: 'assets/fonts/**/*',
};

gulp.task('bower-clean-sass', function (cb) {
  del(['assets/stylesheets/plugins/bower'], cb);
});

gulp.task('bower-clean', ['bower-clean-sass']);

gulp.task('bower-install', function (cb) {
  bower.commands.install([])
    .on('end', function () {
      cb();
    });
});

gulp.task('bower-sass', ['bower-clean-sass', 'bower-install'], function () {
  return gulp.src(bowerFiles({
      includeDev: true,
      filter: ['**/*.scss', '**/*.css'],
    }), {base: 'bower_components'})
    .pipe(gulp.dest('assets/stylesheets/plugins/bower'));
});

gulp.task('bower', ['bower-sass']);
