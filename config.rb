###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compressed
  require 'modular-scale'
  require 'color-schemer'
end

# Configure blog
activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "posts/{title}/index.html"
  # blog.default_extension = ".md"
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
page "/blog/*", :layout => :post
page "/blog/index.html", :layout => :layout

#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Activate autoprefixer
activate :autoprefixer

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :minify_html
end
