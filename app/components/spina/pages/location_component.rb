module Spina::Pages
  class LocationComponent < Spina::ApplicationComponent
    attr_accessor :f
    
    def initialize(f, page = nil)
      @f = f
      @page = page
    end
    
    def page_collections
      [main_collection_option] + Spina::PageCollection.order(:label).map do |page_collection|
        [ page_collection.label, page_collection.id, data: {
          parent_pages_url:  helpers.spina.admin_parent_pages_path(page_collection_id: page_collection.id)
        }]
      end
    end
    
    def main_collection_option
      ["Main collection", nil, data: {
          parent_pages_url: helpers.spina.admin_parent_pages_path
        }]
    end
    
    def default_parent_pages_path
      helpers.spina.admin_parent_pages_path(page_collection_id: @page&.resource_id, parent_id: @page&.parent_id, page_id: @page&.id)
    end
    
  end
end