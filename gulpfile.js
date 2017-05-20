var gulp = require('gulp'),//本地安装gulp所用到的地方
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	compressCss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	paths = {
		scripts:['src/coffee/*.coffee'],
		css:['src/less/*.less'],
		images:['src/images/*']
	}


//not all tasks need to use streams
//A gulpfile is just another node program and you can use any package available on npm

gulp.task('cleanImages',function(){
	//you can use multiple globbing patterns as you would with gulp.src
	return del(['build/images']);
});
gulp.task('cleanScript',function(){
	//you can use multiple globbing patterns as you would with gulp.src
	return del(['build/js']);
});
gulp.task('cleanCss',function(){
	//you can use multiple globbing patterns as you would with gulp.src
	return del(['build/css']);
});


gulp.task('scripts', ['cleanScript'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      //.pipe(concat('*.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Copy all static images
gulp.task('images', ['cleanImages'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/images'));
});

//less
gulp.task('css',['cleanCss'],function(){
	return gulp.src(paths.css)
	    .pipe(less())
	    .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
	    .pipe(compressCss())   //执行压缩
 		.pipe(gulp.dest('build/css'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.css, ['css']);
});


// gulp.task('blog',function(){
// 	gulp.src('src/less/*.less')//该任务针对的文件夹
// 	.pipe(less())
// 	.pipe(gulp.dest('build/css'));

// 	// watch('build/less/*.less',{ignoreInitial:false})
// 	// .pipe(gulp.dest('src/css/'));

// 	gulp.src('build/css/*.css')
// 	.pipe(cleanCss())
// 	//.pipe(del(['build/css/*.min.css']))
// 	.pipe(gulp.dest('build/css/'))
// });

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images','css']);