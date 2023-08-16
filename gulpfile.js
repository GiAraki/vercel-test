const gulp = require('gulp');/*constante para tasks en linea*/
const sass = require('gulp-sass')(require('sass')); /*responsable de integrar gulp con sass*/
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavascript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))

}

function compilaSass(){ 
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))

}

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ ignoreInitial: false} ,gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ ignoreInitial: false} ,gulp.series(comprimeJavascript));
    gulp.watch('./source/images/*',{ ignoreInitial: false} ,gulp.series(comprimeImagens));

}