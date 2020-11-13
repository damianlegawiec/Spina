module Spina
  class PageContentComponent < ApplicationComponent

    def initialize(page, locale: I18n.default_locale)
      @page = page
      @locale = locale
    end

    def parts
      helpers.current_theme.view_templates.find do |view_template|
        view_template[:name].to_s == @page.view_template.to_s
      end&.dig(:parts) || []
    end

  end
end