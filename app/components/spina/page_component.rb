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

    def missing_locales
      Spina.config.locales.map(&:to_sym) - existing_locales
    end

    def existing_locales
      @existing_locales ||= @page.translations.pluck(:locale).map(&:to_sym)
    end

  end
end