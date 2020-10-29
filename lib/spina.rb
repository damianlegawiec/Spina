require 'spina/engine'
require 'spina/railtie'
require 'spina/plugin'
require 'spina/theme'
require 'spina/attr_json_spina_parts_model'
require 'webpacker'

module Webpacker
  module WatchedFilesDigestPatch
    private

    def watched_files_digest
      Dir.chdir config.root_path do
        super
      end
    end
  end
end

Webpacker::Compiler.prepend Webpacker::WatchedFilesDigestPatch

module Spina

  include ActiveSupport::Configurable

  ROOT_PATH = Pathname.new(File.join(__dir__, ".."))
  PARTS = []
  PLUGINS = []
  THEMES = []

  config_accessor :backend_path, :disable_frontend_routes, :storage, :max_page_depth, :locales, :embedded_image_size

  self.backend_path = 'admin'

  self.disable_frontend_routes = false

  self.storage = :file

  self.max_page_depth = 5

  self.locales = [I18n.default_locale]

  # Images that are embedded in the Trix editor are resized to fit
  # You can optimize this for your website and go for a smaller (or larger) size
  # Default: 2000x2000px
  self.embedded_image_size = "2000x2000>"

  class << self

    def webpacker
      @webpacker ||= ::Webpacker::Instance.new(
        root_path: ROOT_PATH,
        config_path: ROOT_PATH.join("config/webpacker.yml")
      )
    end

  end

end
