module Spina
module Admin
  module FileManager
    class AttachmentsController < AdminController
      
      def index
        @attachments = Attachment.sorted.with_attached_file.page(params[:page]).per(25)
        render layout: false
      end
      
    end
  end
end
end