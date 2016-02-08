source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json', {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}).read)

gem 'github-pages', versions['github-pages']
gem 'rouge'
gem 'scss_lint'

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
