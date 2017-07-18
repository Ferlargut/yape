var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    source: './src',
    dist: './public',
};

var path = {
    html: '/assets/*.html',
    sass: '/assets/scss/*.scss',
    mainSass: '/assets/scss/main.scss',
    

};

var source = {
    html: config.source + path.html,
    sass: config.source + path.sass,
    rootSass: config.source + path.mainSass,
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
    .pipe(gulp.dest( config.dist+ "css"));    
});