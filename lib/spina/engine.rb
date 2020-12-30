require 'haml-rails'
require 'sass-rails'
require 'coffee-rails'
require 'jquery-rails'
require 'hotwire-rails'
require 'mini_magick'
require 'ancestry'
require 'breadcrumbs_on_rails'
require 'kaminari'
require 'mobility'
require 'rack-rewrite'
require 'attr_json'
require 'view_component/engine'

module Spina
  class Engine < ::Rails::Engine
    isolate_namespace Spina

    config.autoload_paths += %W( #{config.root}/lib )

    config.to_prepare do
      # Load helpers from main application
      Spina::ApplicationController.helper Rails.application.helpers

      # Require decorators from main application
      [Rails.root].flatten.map { |p| Dir[p.join('app', 'decorators', '**', '*_decorator.rb')]}.flatten.uniq.each do |decorator|
        Rails.configuration.cache_classes ? require(decorator) : load(decorator)
      end

      # Register JSON part types for editing content
      Spina::Part.register(
        Spina::Parts::Line,
        Spina::Parts::MultiLine,
        Spina::Parts::Text,
        Spina::Parts::Image,
        Spina::Parts::ImageCollection,
        Spina::Parts::Repeater,
        Spina::Parts::Option,
        Spina::Parts::Attachment
      )
    end

    initializer "spina.helpers" do
      Rails.application.config.assets.configure do |env|
        env.context_class.class_eval { include Spina::ImportmapHelper }
      end
    end

    initializer "webpacker.proxy" do |app|
      insert_middleware = begin
                          Spina.webpacker.config.dev_server.present?
                        rescue
                          nil
                        end
      next unless insert_middleware

      app.middleware.insert_before(
        0, Webpacker::DevServerProxy, # "Webpacker::DevServerProxy" if Rails version < 5
        ssl_verify_none: true,
        webpacker: Spina.webpacker
      )
    end

    initializer "spina.modal" do |app|
      Mime::Type.register "application/modal", :modal
    end

    config.app_middleware.use(
      Rack::Static,
      urls: ["/spina-packs"], root: Spina::Engine.root.join("public")
    )
  end
end
