module Spina
  module MediaPicker
    class ModalComponent < ApplicationComponent
      
      def initialize(target)
        @target = target
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