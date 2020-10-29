require "webpacker/helper"

module Spina
  module ApplicationHelper
    include ::Webpacker::Helper

    def current_webpacker_instance
      Spina.webpacker
    end
  end
end