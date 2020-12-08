module Spina
  module Admin
    module FileManager
      class ImagesController < AdminController
        before_action :set_media_folder
        
        layout false
        
        def index
          @images = Image.sorted.where(media_folder: @media_folder).with_attached_file.page(params[:page]).per(25)
        end
        
        private
        
          def set_media_folder
            @media_folder = MediaFolder.find_by(id: params[:media_folder_id])
          end
        
      end
    end
  end
end