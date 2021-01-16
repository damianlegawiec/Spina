module Spina
  module Pages
    class ListComponent < ApplicationComponent
      attr_reader :depth
  
      def initialize(pages:)
        @pages = pages
      end
  
    end
  end
end