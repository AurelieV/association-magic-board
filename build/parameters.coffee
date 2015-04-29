app_path = 'client'
web_path = 'www'

config =
  backend_route: '/association-magic-board/api'
  app_path: app_path
  server_path: 'server'
  web_path: web_path
  vendor_path: 'vendor'
  assets_path: "#{app_path}/assets"
  backend_main_file: 'server/server.js'
  build_temp_path: 'build/temp'

  app_main_file: 'app.js'
  css_main_file: 'app.css'
  less_main_file: "#{app_path}/app.less"
  templates_file: 'app.templates.js'
  templates_module: 'association-magic-board.templates'
  vendor_main_file: 'vendor.js'
  fonts:
    input_paths: [
      'bower_components/components-font-awesome/fonts/*'
      'bower_components/bootstrap/fonts/*'
    ]
    output_path: "#{web_path}/css/fonts"

module.exports = config
