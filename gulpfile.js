var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var src = 'dev/app/source/';
var dest = 'dev/app/compiled/';

gulp.task('sass', function(){
    return sass(src + 'sass/app.sass', {
        style: 'compact'
        })
        .pipe(autoprefixer({borwsers: ["last 2 versions"], cascade: false}))
        .pipe(gulp.dest(dest));
});

gulp.task('js', function(){
    return gulp.src(src + 'js/**/*.js')
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function(){
    gulp.watch(src + 'sass/**/*.*', ['sass']);
    gulp.watch(src + 'js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
