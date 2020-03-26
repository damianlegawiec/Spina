module Spina
  module Api
    module V1
      class PagesController < BaseController

        def index
          @pages = Page.all
          render json: @pages.to_json
        end

      end
    end
  end
end