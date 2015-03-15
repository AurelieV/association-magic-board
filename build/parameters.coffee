app_path = 'client'
web_path = 'www'

config =

  app_route: '/my-app'
  backend_route: '/my-app/api'

  app_path: app_path
  server_path: 'server'
  web_path: web_path
  vendor_path: 'vendor'
  assets_path: "#{app_path}/assets"
  backend_main_file: 'server/server.coffee'
  build_temp_path: 'build/temp'

  app_main_file: 'app.js'
  css_main_file: 'app.css'
  less_main_file: "#{app_path}/app.less"
  templates_file: 'app.templates.js'
  templates_module: 'my-app.templates'
  vendor_main_file: 'vendor.js'
  i18n:
    input_path: "#{app_path}/i18n"
    output_path: "#{web_path}/i18n"
  fonts:
    input_paths: [
      'bower_components/components-font-awesome/fonts/*'
      'bower_components/bootstrap/fonts/*'
    ]
    output_path: "#{web_path}/css/fonts"

module.exports = config
