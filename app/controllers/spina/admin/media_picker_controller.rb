module Spina
  module Admin
    class MediaPickerController < AdminController
      
      def show
        render Spina::MediaPicker::ModalComponent.new, layout: false
      end
      
    end
  end
end
