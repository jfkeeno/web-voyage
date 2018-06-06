var gulp = require('gulp'),//we import the gulp package with require
watch = require('gulp-watch');
/*when creating multiple variables in a row, write var once and change 
the semicolon to a comma, except after the last variable */

/*---------------------------------------------------------------
// everything in gulp evolve around tasks. Gulp is expecting us 
to have define a default task in this very file. we use the variable
'gulp' we created and use a method called task with 2 arguments
1- is what we want the task to be named. 'default'
2- what we want to happen when this task runs. Usually we use an 
anonymous function
----------------------------------------------------------------*/
gulp.task('default',function(){
    console.log("Hooray - you created a Gulp Task.");

});

gulp.task('html', function(){
    console.log("Imagine something useful being done to your html here.");

});

/*  create a new task and call it watch, every time the file change, 
it trigger the above html task */
gulp.task('watch', function(){
    watch('./app/index.html', function(){
      gulp.start('html');
    });

    gulp.task('styles', function(){
      console.log("Imagine Sass or PostCSS tasks running here...");
  
  });

    watch('./app/assets/styles/**/*.css', function(){
      gulp.start('styles');
    });
});