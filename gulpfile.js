var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
webpack = require('webpack'),
webpackconfig = require('./webpack.config.js'),
webpackstream = require('webpack-stream'),
autoprefixer = require('autoprefixer'),
postcss = require('gulp-postcss'),
reload = browserSync.reload;

function css() {
    return gulp.src('./app/assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('./app/assets/js/**/*.js')
    .pipe(webpackstream(webpackconfig, webpack))
    .pipe(gulp.dest('./app/assets/js/final'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });
    gulp.watch('./app/assets/sass/**/*.scss', css);
    gulp.watch('./app/assets/js/**/*.js', scripts);
    gulp.watch('./app/**/*.html').on('change', reload);
}

exports.css = css;
exports.scripts = scripts;
exports.watch = watch;