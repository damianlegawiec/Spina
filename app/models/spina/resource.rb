module Spina
  class Resource < ApplicationRecord
    extend Mobility

    has_many :pages, dependent: :restrict_with_exception

    translates :slug, backend: :jsonb

    def pages
      case order_by
      when "title"
        super.joins(:translations).where(spina_page_translations: {locale: I18n.locale}).order("spina_page_translations.title")
      else
        super
      end
    end
    
  end
end