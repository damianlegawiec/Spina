module Spina
  class PageComponent < ApplicationComponent

    def initialize(page:)
      @page = page
    end

    def depth
      return 0 unless view_context.is_a? Spina::PageListComponent
      view_context.depth
    end

    def children
      @children ||= @page.children.active.sorted.regular_pages
    end
    
    def depth_classes
      case depth
      when 1
        "pl-5 bg-gray-100"
      when 2
        "pl-10 bg-gray-200"
      else
        ""
      end
    end

  end
end