/**
 * Created by Mahesh on 7/3/2016.
 */
var gulp =require('gulp'),
    uglify=require('gulp-uglify'),
    rename=require('gulp-rename'),
    concat=require('gulp-concat'),
    watch=require('gulp-watch');

//Scripts Tasks
/*gulp.task('scripts',function(){
    gulp.src(['scripts/!**!/!*.js','!scripts/!**!/!*.min.js'])
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('scripts'));
})*/
gulp.task('concat',function(){
    return gulp.src(['scripts/**/*.js'])
        .pipe(concat('combined.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch',function(){
    gulp.watch('scripts/**/*.js',['concat']);
});



//default tasks
gulp.task('default',['concate']);