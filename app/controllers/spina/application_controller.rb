module Spina
  class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    
    before_action :set_current_variables

    private
    
    def set_current_variables
      current_theme
      current_spina_user
      current_account
    end

    def current_theme
      Spina::Current.theme ||= ::Spina::Theme.find_by_name(current_account.theme)
    end
    helper_method :current_theme

    def current_spina_user
      Spina::Current.user ||= ::Spina::User.where(id: cookies.signed[:spina_user_id]).first if cookies.signed[:spina_user_id]
    end
    helper_method :current_spina_user

    def current_account
      Spina::Current.account ||= ::Spina::Account.first
    end
    helper_method :current_account

  end
end
