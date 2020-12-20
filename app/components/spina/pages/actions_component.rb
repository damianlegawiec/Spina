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
      
      def just_published?
        @page.saved_change_to_draft?
      end
      
    end
  end
end