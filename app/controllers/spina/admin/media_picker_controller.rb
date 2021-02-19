module Spina
  module Admin
    class MediaPickerController < AdminController
      
      def show
        @media_folder = Spina::MediaFolder.find_by(id: params[:media_folder_id])
        @images = Spina::Image.sorted.where(media_folder: @media_folder).with_attached_file.page(params[:page]).per(16)
      end
      
    end
  end
end
