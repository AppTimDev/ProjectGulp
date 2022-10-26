const gulp = require('gulp');
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const htmlreplace = require('gulp-html-replace');
const minifyHTML = require('gulp-minify-html');

gulp.task('server', function () {
    gulp.src('./dest/')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

//concat all css files
gulp.task('concat-css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dest/css/'));
});

//minify css file
gulp.task('minify-css', ['concat-css'], function () {
    return gulp.src('./dest/css/bundle.css')
        .pipe(minifyCSS({
            keepBreaks: false,
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./dest/css/'));
});

//uglify js files
gulp.task('uglify', function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dest/js/'));
});


gulp.task('html', function () {
    var options = {
        comments: false,
        spare: false,
        quotes: true
    };
    return gulp.src('./src/*.html')
        .pipe(htmlreplace({
            'css': 'css/bundle.min.css',
            'js': 'js/bundle.min.js'
        }))
        .pipe(minifyHTML(options))
        .pipe(gulp.dest('./dest/'));
});


gulp.task('build', ['html', 'minify-css', 'uglify']);

gulp.task('default', ['build','server']);