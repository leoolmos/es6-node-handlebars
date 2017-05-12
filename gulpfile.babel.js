import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import watch from 'gulp-watch';

const paths = {
  'css': {
    'src': './app/assets/sass/',
    'dist': './public/assets/css/'
  },
  'js': {
    'src': './app/assets/js/',
    'dist': './public/assets/js/'
  }
};

gulp.task('sass', () => {
  gulp.src(paths.css.src + 'main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.css.dist));
});

gulp.task('js', () => {
  gulp.src(paths.js.src + '/**/*.js')
  .pipe(babel({
      presets: ['es2015']
  }))
  .pipe(gulp.dest(paths.js.dist));
});


gulp.task('watch', () => {
  gulp.watch(paths.css.src + '**/*.scss', ['sass']);
  gulp.watch(paths.js.src + '**/*.js', ['js']);
});

gulp.task('default', [
  'sass',
  'js'
]);
