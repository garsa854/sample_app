source 'https://rubygems.org'

gem 'rails', '3.2.1'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

group :production do
	gem 'pg'
end

group :development do
	gem 'sqlite3-ruby', :require => 'sqlite3'
	gem 'rspec-rails', '>= 2.0.0'
	gem 'annotate'
	# use capybara to get rspec response.should have_selector to work
	gem 'capybara'
end

group :test do
	gem 'sqlite3-ruby', :require => 'sqlite3'
	gem 'rspec', '>= 2.0.0'
end


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
