const gulp = require('gulp');
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const htmlreplace = require('gulp-html-replace');
const minifyHTML = require('gulp-minify-html');
const rimraf = require('rimraf');
const copy = require('gulp-contrib-copy');
const browserSync = require('browser-sync').create();

var path = {
    src: './src/',
    dest: './dest',
    dest_js: './dest/js/',
    dest_css: './dest/css/',
    dest_files: './dest/*'
}

gulp.task('browser-dev', () => {
    browserSync.init({
        server: {
            baseDir: path.src,
        },
        port: 8080
    });
});

gulp.task('browser-pro', () => {
    browserSync.init({
        server: {
            baseDir: path.dest,
        },
        port: 8080
    });
});
gulp.task('watch-dev', function () {
    gulp.watch("./src/**").on('change', browserSync.reload);

});

gulp.task('build', ['html', 'css', 'js']);
gulp.task('build-reload', ['build'], function(done) {
    browserSync.reload();
    done();
});
//browser-pro
//if any files change in source files,i.e. watch-pro task
//build task --> browserSync.reload
gulp.task('watch-pro', function () {
    gulp.watch("./src/**", ['build-reload']);
});

gulp.task('dev', ['browser-dev', 'watch-dev']);
gulp.task('pro', ['browser-pro', 'watch-pro']);

gulp.task('server', function () {
    gulp.src(path.dest)
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

//concat all js files
gulp.task('concat-js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(path.dest_js));
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
        .pipe(gulp.dest(path.dest_css));
});

//concat all css files into one bundle css file and minify this file
gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(concat('bundle.min.css'))
        .pipe(minifyCSS({
            keepBreaks: false,
        }))
        .pipe(gulp.dest(path.dest_css));
});

//concat all js files into one bundle js file and minify this file
gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dest_js));
});

//uglify all js files and concat them to a bundle file
gulp.task('bundle-js', ['concat-js'], function () {
    return gulp.src('./dest/js/bundle.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dest/js/'));
});

//uglify each js file
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

//remove all files of the destination folder
gulp.task('clean', function (cb) {
    rimraf(path.dest_files, cb);
});

//Copy files to destination folder
gulp.task('copy', function () {
    gulp.src('dest/**')
        .pipe(copy())
        .pipe(gulp.dest('public/'));
});




gulp.task('default', ['build', 'pro']);

