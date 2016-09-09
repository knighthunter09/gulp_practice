var gulp = require('gulp');

gulp.task('hello',function(){
console.log("Help gulp!");
});

gulp.task('default',['hello']);
