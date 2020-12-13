module Spina
  module Admin
    module MediaPicker
      class ImagesController < AdminController
  
        def index
          @images = Spina::Image.sorted.with_attached_file.page(params[:page]).per(25)
          render layout: false
        end
        
        # There's no file validation yet in ActiveStorage
        # We do two things to reduce errors right now:
        # 1. We add accept="image/*" to the image form
        # 2. We destroy the entire record if the uploaded file is not an image
        def create
          @images = params[:image][:files].map do |file|
            # Create the image and attach the file
            image = Image.create(media_folder_id: params[:media_library])
            image.file.attach(file)
  
            # Was it not an image after all? DESTROY IT
            image.destroy and next unless image.file.image?
  
            image
          end.compact
          
          render inline: view_context.render(Spina::MediaPicker::ImageComponent.with_collection(@images))
        end
  
      end
    end
  end
end