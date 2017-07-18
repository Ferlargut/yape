var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    source: './src',
    dist: './public',
};

var path = {
    assets: '/assets/',
    html: '/assets/*.html',
    sass: '/scss/*.scss',
    mainSass: '/scss/main.scss',

};

var source = {
    assets: config.source + path.assets,
    html:config.source + path.html,
    sass: path.assets + path.sass,
    rootSass: config.source + path.assets + path.mainSass,
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
    .pipe(gulp.dest( config.dist + path.assets+"css"));    
});