module Spina
  module Parts
    class Image < Base
      attr_json :image_id, :integer, default: nil
      attr_json :signed_blob_id, :string, default: nil
      attr_json :alt, :string, default: ""
      attr_json :filename, :string, default: ""

      attr_accessor :options

      def to_s
        alt.presence || filename.presence || Spina::Image.model_name.human
      end

      def ratio_class
        case options.try(:[], :ratio)
        when "portrait"
          "w-28"
        when "landscape"
          "w-48"
        when "wide"
          "w-80"
        else
          "w-36" # Square (default)
        end
      end

      def content
        self
      end

      def svg?
        filename =~ /\.svg\z/
      end

      def spina_image
        Spina::Image.find_by(id: image_id)
      end

      def present?
        signed_blob_id.present?
      end
    end
  end
end
