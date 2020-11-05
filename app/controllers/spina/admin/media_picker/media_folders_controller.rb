module Spina::Admin
  module MediaPicker
    class MediaFoldersController < AdminController

      def show
        @media_folder = Spina::MediaFolder.find(params[:id])
        @images = @media_folder.images.order(created_at: :desc).page(params[:page]).per(25)
        render layout: false
      end

    end
  end
end