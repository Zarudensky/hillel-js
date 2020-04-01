const {series, src, dest} = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

function defaultTask(cb) {
    console.log('Hello world');
    cb();
}

function html() {
    console.log('build html');
    return src('./src/index.html').pipe(dest('./dist/index.html'));
}

function sripts() {
    console.log('build scripts');
    return src('./src/**/*.js')
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(dest('./dist'));
}

function styles() {
    console.log('build styles');
    return src('./src/styls.scss')
    .pipe(sass())
    .pipe(dest('./dist'));
}

function watchFiles() {
    watch('.src/**/*.js', scripts);
    watch('.src/**/*.sass', styles);

}

function surve() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    watch('.src/**/*.js', scripts);
    watch('.src/**/*.sass', styles);
}

const build = series(html, sripts, styles);

module.exports = {
    default: defaultTask,
    build: build,
    dev: series(build, watchFiles),
    serve: series(build, serve)
}