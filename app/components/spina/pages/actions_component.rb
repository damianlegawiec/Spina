module Spina
  module Pages
    class ActionsComponent < ApplicationComponent
      
      def initialize(page:, locale: I18n.locale)
        @page = page
        @locale = locale
      end
      
      def publishable?
        @page.persisted? && @page.draft?
      end
      
    end
  end
end