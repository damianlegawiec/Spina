module Spina
  module Pages
    class PageComponent < ApplicationComponent
  
      def initialize(page:)
        @page = page
      end
      
      def label
        labels = []
        labels << t("spina.pages.concept") if @page.draft?
        labels << t("spina.pages.show_in_menu") unless @page.show_in_menu?
        labels << t("spina.pages.skip_to_first_child") if @page.skip_to_first_child?
        return nil if labels.size.zero?
        "(#{labels.join(", ")})"
      end
  
      def depth
        return 0 unless view_context.is_a? Spina::Pages::ListComponent
        view_context.depth
      end
      
      def css_class
        case depth
        when 1
          "pl-5 bg-gray-100"
        when 2
          "pl-10 bg-gray-200"
        end
      end
  
      def children
        @children ||= @page.children.active.sorted.regular_pages
      end
  
    end
  end
end