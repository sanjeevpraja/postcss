var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var postcsseach = require('postcss-each');


gulp.task('css', function () {
	var processors = [
	autoprefixer,
	cssnext,
	precss,
	postcsseach
	];

	return gulp.src('./src/*.scss')
	.pipe(postcss(processors))
	.pipe(sass())
	.pipe( sourcemaps.write('.') )
	.pipe(gulp.dest('./dest'));
});


gulp.task('watch', function(){
	gulp.watch('./src/*.scss', ['css']);
})