module Spina
  module Nav
    class LinkComponent < ApplicationComponent

      def initialize(label, path, active: false)
        @label = label
        @path = path
        @active = active
      end

      def css_classes
        if @active
          ""
        else
          "opacity-50"
        end
      end

    end
  end
end