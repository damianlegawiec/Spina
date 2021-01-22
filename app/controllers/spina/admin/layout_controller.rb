module Spina::Admin
  class LayoutController < AdminController
    before_action :set_account
    before_action :set_locale
    
    admin_section :settings

    def edit
    end

    def update
      if @account.update(layout_params)
        redirect_to spina.edit_admin_layout_path, flash: {success: "Layout saved"}
      else
        flash.now[:error] = "Layout couldn't be saved"
        render partial: 'error', status: :unprocessable_entity
      end
    end

    private
    
      # Permit all attributes when editing your layout
      def layout_params
        params.require(:account).permit!
      end

      def set_account
        @account = current_account
      end

      def set_locale
        @locale = params[:locale] || I18n.default_locale
      end

  end
end