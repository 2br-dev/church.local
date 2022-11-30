const gulp = require('gulp');
const nodeSass = require('node-sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(nodeSass);
const autoprefixer = require('gulp-autoprefixer');
const include = require('gulp-file-include');
const browserify = require('browserify');
const babelify = require('babelify');
const browserSync = require('browser-sync');
const source = require('vinyl-source-stream');

const server = browserSync.init({
	server: {
		baseDir: './release/'
	}
})

gulp.task('html', () => {
	return gulp.src('./src/html/*.html')
		.pipe(include())
		.pipe(gulp.dest('./release/static_html/'))
		.pipe(server.stream())
});

gulp.task('scss', () => {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./release/css/'))
		.pipe(server.stream())
});

gulp.task('java', () => {
	return browserify({entries: './src/js/master.js'})
		.transform(babelify, {presets: ['@babel/preset-env']})
		.bundle()
		.pipe(source('master.js'))
		.pipe(gulp.dest('./release/js/'))
		.pipe(server.stream())
})

gulp.task('watch', () => {
	gulp.watch('./src/html/**/*.html', gulp.series('html'));
	gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch('./src/js/**/*.js', gulp.series('java'));
})