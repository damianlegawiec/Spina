module Spina::Admin
  module MediaPicker
    class ImagesController < AdminController

      def index
        @images = Spina::Image.order(created_at: :desc).page(params[:page]).per(25)
        render Spina::MediaPicker::ImageComponent.with_collection(@images)
      end

    end
  end
end