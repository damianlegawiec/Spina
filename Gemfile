source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gemspec
gem 'rails', '~> 6.1.0'

# Required for now, because v1.2.0 doesn't support Rails 6.1 yet
gem 'attr_json', github: "jrochkind/attr_json", branch: :master

group :test do
  gem 'factory_bot'
  gem 'rails-controller-testing'
  gem 'minitest-reporters'
  gem 'simplecov'
  gem 'codeclimate-test-reporter', '~> 1.0.0'

  gem 'letter_opener'
  gem 'pry-rails'
  gem 'mocha'

  gem 'puma'
end