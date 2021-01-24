module Spina
  module Admin
    class AccountsController < AdminController
      admin_section :settings

      def edit
        add_breadcrumb I18n.t('spina.preferences.account'), spina.edit_admin_account_path
      end

      def update
        current_account.update(account_params)
        redirect_back fallback_location: spina.edit_admin_account_path, flash: {success: "Account saved"}
      end

      private

        def account_params
          params.require(:account).permit!
        end

    end
  end
end
