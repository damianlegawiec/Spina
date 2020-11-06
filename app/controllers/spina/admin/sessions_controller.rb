module Spina
  module Admin
    class SessionsController < AdminController

      layout "spina/login"

      skip_before_action :authorize_spina_user

      def new
      end

      def create
        user = User.where(email: params[:email]).first
        if user && user.authenticate(params[:password])
          cookies.permanent[:user_id] = user.id
          user.touch(:last_logged_in)
          redirect_to spina.admin_root_url
        else
          flash.now[:alert] = I18n.t('spina.notifications.wrong_username_or_password')
          render "new"
        end
      end

      def destroy
        cookies.destroy(:user_id)
        redirect_to "/"
      end
    end
  end
end
