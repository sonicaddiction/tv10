var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	browserSync = require('browser-sync'),
	browserify = require('gulp-browserify'),
    notify = require("gulp-notify"),
    jasmine = require('gulp-jasmine');

var paths = {
    less: 'src/less/**/*.less',
    html: 'src/**/*.html'
};

gulp.task('browser-sync', function() {
    browserSync.init([paths.less, paths.html, 'src/build/app/app.js'], {
        server: {
            baseDir: './src'
        }
    });
});

gulp.task('less', function () {
	gulp.src('src/less/main.less')
    	.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
        .on("error", notify.onError('<%= error.message %>'))
		.pipe(gulp.dest('src/build/css'));
});

gulp.task('scripts', function() {
    gulp.src('src/app/app.js')
        .pipe(browserify({
            insertGlobals : true,
            transform: ['hbsfy']
        }))
        .on("error", notify.onError('<%= error.message %>'))
        .pipe(gulp.dest('src/build/app'));
});

gulp.task('test', function () {
    gulp.src('test/**/*.js')
        .pipe(jasmine());
});

gulp.task('default', ['less', 'scripts', 'browser-sync'], function () {
    gulp.watch("src/less/**/*.less", ['less']);
    gulp.watch("src/app/**/*.js", ['scripts']);
});