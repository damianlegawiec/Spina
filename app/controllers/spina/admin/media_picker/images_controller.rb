module Spina::Admin
  module MediaPicker
    class ImagesController < AdminController

      def index
        @images = Spina::Image.order(created_at: :desc).page(params[:page]).per(25)
        render layout: false
      end

    end
  end
end