module Spina
  module Menu
    class ListComponent < ApplicationComponent
      with_content_areas :icon, :links
      
      def initialize(id: :website)
        @id = id
      end
      
      def active?
        helpers.active_admin_section == @id
      end
      
      def button_classes
        if active?
          "opacity-100"
        else
          "opacity-50"
        end
      end
      
      def ul_classes
        if active?
          "md:translate-x-20 "
        else
          "translate-x-full"
        end
      end
      
    end
  end
end