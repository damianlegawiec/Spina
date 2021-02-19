module Spina
  module MediaPicker
    class ModalComponent < ApplicationComponent
      
      def initialize(target, images:)
        @target = target
        @images = images
      end

      def media_folders
        @media_folders ||= Spina::MediaFolder.order(:name)
      end
      
      def image_count
        @image_count ||= Spina::Image.count
      end

    end
  end
end