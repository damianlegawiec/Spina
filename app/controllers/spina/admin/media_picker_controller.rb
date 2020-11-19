module Spina
  module Admin
    class MediaPickerController < AdminController
      
      def show
        render Spina::MediaPicker::ModalComponent.new
      end
      
    end
  end
end
