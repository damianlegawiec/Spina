module Spina
  class PageTranslationsComponent < ApplicationComponent

    def initialize(page, label: nil)
      @page = page
      @label = label
    end

    def missing_locales
      spina_locales - existing_locales
    end

    def existing_locales
      @existing_locales ||= @page.translations.pluck(:locale).map(&:to_sym).sort_by do |locale|
        spina_locales.index(locale)
      end
    end

    private

      def spina_locales
        Spina.config.locales.map(&:to_sym)
      end

  end
end