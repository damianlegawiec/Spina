module Spina::Admin
  class ParentPagesController < AdminController
    
    def index
      @page_collection = Spina::Resource.find_by(id: params[:page_collection_id])
      @pages = Spina::Page.where(resource: @page_collection).sorted
      render turbo_stream: turbo_stream.update("parent_pages", partial: "parent_pages/select")
    end
    
  end
end