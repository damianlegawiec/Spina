module Spina::Pages
  class LocationComponent < Spina::ApplicationComponent
    attr_accessor :f
    
    def initialize(f, page_collection = nil)
      @f = f
      @page_collection = page_collection
    end
    
    def page_collections
      Spina::PageCollection.order(:label).map do |page_collection|
        [ page_collection.label, page_collection.id, data: {
          parent_pages_url:  helpers.spina.admin_parent_pages_path(page_collection_id: page_collection.id)
        }]
      end
    end
    
    def default_parent_pages_path
      helpers.spina.admin_parent_pages_path(page_collection_id: @page_collection&.id)
    end
    
  end
end