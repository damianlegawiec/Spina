module Spina
  module FileManager
    class AttachmentComponent < ApplicationComponent
  
      def initialize(attachment:)
        @attachment = attachment
      end
      
      def content_type
        @attachment.file.content_type.split("/").last
      end
      
      def content_type_color
        case content_type
        when "png"
          "bg-green-300"
        when "heic"
          "bg-blue-200"
        when "jpg", "jpeg"
          "bg-blue-400"
        when "gif"
        when "svg"
          "bg-yellow-400"
        else
          "bg-gray-400"
        end
      end
  
    end
  end
end