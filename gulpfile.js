var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

var config = {
    source: './src',
    dist: './public/',
};

var path = {
    assets: '/assets/',
    html: '/assets/*.html',
    sass: '/assets/scss/*.scss',
    mainSass: '/assets/scss/main.scss',
    js: '/assets/js/*.js',
    mainJS: '/assets/js/main.js'
};

var source = {
    html: config.source + path.html,
    sass: config.source + path.sass,
    rootSass: config.source + path.mainSass,
    js: config.source + path.js,
    rootJS: config.source + path.mainJS,
};

gulp.task('html', ()=> {
    gulp.src(source.html)
    .pipe(gulp.dest(config.dist));
});

gulp.task("sass", function () {
    gulp.src(source.rootSass)
    .pipe(sass({
        outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest(config.dist + path.assets+ "css"));    
});

gulp.task("js", function () {
    gulp.src(source.rootJS)
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(config.dist + path.assets+ "js"));    
});