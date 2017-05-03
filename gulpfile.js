// plugins
var gulp            = require('gulp'),
	gutil           = require('gulp-util'),
	concat          = require('gulp-concat'),
	clean           = require('gulp-clean'),
	uglify          = require('gulp-uglify'),
	stripDebug      = require('gulp-strip-debug'),
	cssmin          = require('gulp-minify-css'),
	sass            = require('gulp-sass'),
	autoprefixer    = require('gulp-autoprefixer'),
	csslint         = require('gulp-csslint'),
	exec            = require('gulp-exec'),
	watch           = require('gulp-watch'),
	preprocess      = require('gulp-preprocess'),
	fileinclude     = require('gulp-file-include'),
	plumber			= require('gulp-plumber'),
	runSequence     = require('run-sequence');

// variables
var dir, config, dev, prod;

// directories
dir = {
	app:     	'src',
	dest: 		'public'
};

// configuration
config = {
	src: {
		css:            dir.app + '/**/*.scss',
	},
	watch: {
		css:            dir.app + '/src/**/*.scss',
	},
	dest: {
		css:            dir.dest + '/css'
	}
};

// Autoprefixer array
autoprefixerBrowsers = [
	'ie >= 8',
	'ie_mob >= 10',
	'ff >= 28',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

// environments
dev = gutil.env.dev;
prod = gutil.env.prod;

//set node_env for preprocessor
if (dev === true) { process.env.NODE_ENV = 'dev' }
else if (prod === true) { process.env.NODE_ENV = 'prod' }

// FUNCTIONS
// =========

// TASKS
// =========

var onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};


// Compile Sass
gulp.task('sass', function() {
	gutil.log('TASK: Process SASS files');
	return gulp.src(config.src.css)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', '> 5%'))
		.pipe(cssmin())
		.pipe(gulp.dest(config.dest.css))
});

//watch task
gulp.task('watch', function() {
	gutil.log('TASK: Initiate watch');
	//watch css files
	gulp.watch(config.watch.css, { interval: 1000 }, ['sass']);
});

//clean task
gulp.task('clean', function() {
	gutil.log('TASK: Clean');
	return gulp.src([dir.dest, '.sass-cache'], {read: false})
		.pipe(clean({force:true}));
});

// // default build task for local hosting
gulp.task('build', [ 'sass' ]);

//default task
gulp.task('default', [ 'serve' ], function(){
	gutil.log('Making ' + dir.dest + ' writeable');
	return gulp.src(dir.dest)
		.pipe(exec('cd '+dir.dest))
		// .pipe(exec('attrib -R -S /S /D'))
		.pipe(exec('cd ..'));
});



gulp.task('serve', function(callback) {
  runSequence('clean',
			  'build',
			  'watch',
			  callback);
});

