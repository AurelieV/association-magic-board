gulp = require 'gulp'
parameters = require '../../parameters.coffee'

coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
plumber = require 'gulp-plumber'
rename = require 'gulp-rename'
rev = require 'gulp-rev'

# Compile CoffeeScript files to JS
# `module.coffee` files are treated before others so all the modules are declared before being used
coffeeFiles = [
  "#{parameters.app_path}/**/module.coffee"
  "#{parameters.app_path}/**/*.coffee"
]

gulp.task 'coffee', ->
  gulp.src coffeeFiles
  .pipe plumber()
  .pipe coffee bare: true
  .pipe concat parameters.app_main_file
  .pipe rev()
  .pipe gulp.dest "#{parameters.web_path}/js"
  .pipe rev.manifest()
  .pipe rename 'rev-coffee.json'
  .pipe gulp.dest parameters.build_temp_path
