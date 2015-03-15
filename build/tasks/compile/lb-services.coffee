gulp       = require 'gulp'
parameters = require '../../parameters.coffee'
rename     = require 'gulp-rename'

gulp.task 'lb-services', ->
  gulp.src "#{parameters.backend_main_file}"
  .pipe require('gulp-loopback-sdk-angular')
    apiUrl: "#{parameters.backend_route}"
  .pipe rename 'lb-services.js'
  .pipe gulp.dest "#{parameters.web_path}/js"
  .once 'end', ->
    process.exit()
