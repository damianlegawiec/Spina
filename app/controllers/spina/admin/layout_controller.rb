module Spina::Admin
  class LayoutController < AdminController
    before_action :set_account
    before_action :set_locale

    def edit
    end

    def update
    end

    private

      def set_account
        @account = current_account
      end

      def set_locale
        @locale = params[:locale] || I18n.default_locale
      end

  end
end