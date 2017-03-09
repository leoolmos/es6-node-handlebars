import gulp from 'gulp';
import debug from 'gulp-debug';
import sass from 'gulp-sass';
import watch from 'gulp-watch';

const paths = {
  'src': {
    'css': './sass/'
  },
  'dist': {
    'css': 'public/css/'
  }
};

gulp.task('sass', () => {
  gulp.src(paths.src.css + 'main.scss')
    // .pipe(debug())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.dist.css));
});

gulp.task('watch', () => {
  gulp.watch(paths.src.css + '*.scss', ['sass']);
});

gulp.task('default', [
  'sass'
]);
