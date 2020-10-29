module Spina
  class PageComponent < ApplicationComponent

    def initialize(page:)
      @page = page
    end

    def children
      @children ||= @page.children.active.sorted.regular_pages
    end

  end
end