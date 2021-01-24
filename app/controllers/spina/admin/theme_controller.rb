module Spina
  module Admin
    class ThemeController < AdminController
      admin_section :settings
      
      def edit
        add_breadcrumb t('spina.website.theme')
      end
      
      def update
        Spina::Current.account.update(theme_params)
        redirect_to spina.edit_admin_theme_path, flash: {success: "Theme saved"}
      end
      
      private
      
        def theme_params
          params.require(:account).permit(:theme)
        end
      
    end
  end
end