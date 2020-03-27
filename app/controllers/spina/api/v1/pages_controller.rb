module Spina
  module Api
    module V1
      class PagesController < BaseController

        def index
          @pages = Page.regular_pages.sorted.live
          render json: Spina::PageSerializer.new(@pages).serialized_json
        end

        def show
          @page = Page.regular_pages.live.find(params[:id])
          render json: PageSerializer.new(@page).serialized_json
        end

      end
    end
  end
end