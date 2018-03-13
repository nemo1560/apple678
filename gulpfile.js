//Made by nemo1560
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch'); //auto compiled cass to css

gulp.task('default', function() {

});

gulp.task('hello',function(){ //demo hello function in console.log
    console.log("Hello");
});

gulp.task('sass',function(){
    return gulp.src('scss/style.scss') //source file -- p/s: file name scss
        .pipe(sass()) //function converts sass to css with gulp-sass    
        .pipe(gulp.dest('css')) //destination -- create new file.css in function
});
gulp.task('watch',function(){
     gulp.watch('scss/style.scss',['sass']) 
});
