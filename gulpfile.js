const gulp = require('gulp');
const zip = require('gulp-zip');
const livereload = require('gulp-livereload');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');

const themeName = 'forestedge';

// CSS Processing
function css() {
    const plugins = [
        autoprefixer(),
        cssnano()
    ];
    
    return gulp.src('assets/css/screen*.css')
        .pipe(concat('screen.css'))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
}

// JavaScript Processing
function js() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
}

// Watch for changes
function watcher() {
    livereload.listen();
    gulp.watch('assets/css/**/*.css', css);
    gulp.watch('assets/js/**/*.js', js);
    gulp.watch('**/*.hbs').on('change', livereload.reload);
}

// Build theme for distribution
function build() {
    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**',
        '!gulpfile.js',
        '!package-lock.json',
        '!yarn.lock'
    ])
    .pipe(zip(`${themeName}.zip`))
    .pipe(gulp.dest('dist/'));
}

// Default task
const defaultTask = gulp.series(css, js);

// Export tasks
exports.css = css;
exports.js = js;
exports.watch = watcher;
exports.build = build;
exports.default = defaultTask;