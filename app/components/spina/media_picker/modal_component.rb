module Spina
  module MediaPicker
    class ModalComponent < ApplicationComponent

      def media_folders
        @media_folders ||= Spina::MediaFolder.order(:name)
      end

    end
  end
end