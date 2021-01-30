module Spina
  module Admin
    class AdminController < ::Spina::ApplicationController
      before_action :add_view_path
      
      before_action :set_admin_locale
      before_action :authorize_spina_user
      
      admin_section :content

      private
      
        def render_flash
          render turbo_stream: turbo_stream.update("flash", partial: "spina/admin/shared/flash")
        end

        def set_admin_locale
          I18n.locale = I18n.default_locale
        end
  
        def authorize_spina_user
          redirect_to admin_login_path, flash: {information: I18n.t('spina.notifications.login')} unless current_spina_user
        end
  
        def authorize_admin
          render status: 401 unless current_spina_user.admin?
        end
        
        def add_view_path
          prepend_view_path Spina::Engine.root.join('app/views/spina/admin')
        end

    end
  end
end
