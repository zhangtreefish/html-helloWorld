var gulp=require('gulp');
gulp.task('default', function(){
	console.log('des es default');
});

var dest = 'build/';

var rename = require ('gulp-rename');
var minifyCSS = require('gulp-minify-css');
gulp.task('styles', function() {
    gulp.src('css/*.css',{style: 'compressed'})
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dest+'css'));
});

var minifyHTML = require ('gulp-minify-html');
gulp.task('page', function() {
	gulp.src('*.html',{style: 'compressed'})
        .pipe(minifyHTML())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dest));
        });

gulp.task('default',['styles','page']);//all worked!!!Yay!