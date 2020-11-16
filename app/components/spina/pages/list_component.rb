module Spina
  module Pages
    class ListComponent < ApplicationComponent
      attr_reader :depth
  
      def initialize(pages:, depth: 0)
        @pages = pages
        @depth = depth
      end
  
    end
  end
end