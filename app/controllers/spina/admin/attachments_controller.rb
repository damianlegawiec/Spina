module Spina
  module Admin
    class AttachmentsController < AdminController
      before_action :set_breadcrumbs

      layout "spina/admin/media_library"

      def index
        @attachments = Attachment.sorted
      end

      def create
        @attachments = params[:attachment][:files].map do |file|
          attachment = Attachment.create(attachment_params)
          attachment.file.attach(file)
          attachment
        end
        render Spina::FileManager::AttachmentComponent.with_collection(@attachments), layout: false
      end
      
      def update
        @attachment = Attachment.find(params[:id])
        if params[:filename].present?
          extension = @attachment.file.filename.extension
          filename = "#{params[:filename]}.#{extension}"
          @attachment.file.blob.update(filename: filename)
        end
        render Spina::FileManager::AttachmentComponent.new(attachment: @attachment)
      end

      def destroy
        @attachment = Attachment.find(params[:id])
        @attachment.destroy
        redirect_to spina.admin_attachments_url
      end

      private

      def set_breadcrumbs
        add_breadcrumb I18n.t('spina.website.media_library')
      end

      def attachment_params
        params.require(:attachment).permit(:file, :page_id, :_destroy)
      end
    end
  end
end
