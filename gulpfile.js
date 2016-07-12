var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var cssnext = require('cssnext');


gulp.task('css', function () {
	var processors = [
	autoprefixer,
	cssnext,
	precss,
	cssnext({})
	];

	return gulp.src('./src/*.scss')
	.pipe(sass())
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
});


gulp.task('watch', function(){
	gulp.watch('./src/*.scss', ['css']);
})