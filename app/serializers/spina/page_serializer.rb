module Spina
  class PageSerializer
    include FastJsonapi::ObjectSerializer

    # Attributes
    attributes :title, :materialized_path, :name, :description, :view_template

    # Custom attributes
    attribute :content do |page|
      page.page_parts.map(&:to_json).to_h
    end
  end
end