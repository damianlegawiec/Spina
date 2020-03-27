module Spina
  module Api
    module V1
      class NavigationsController < BaseController

        def index
          @navigations = Navigation.sorted
          render json: Spina::NavigationSerializer.new(@navigations, include: [:navigation_items]).serialized_json
        end

      end
    end
  end
end