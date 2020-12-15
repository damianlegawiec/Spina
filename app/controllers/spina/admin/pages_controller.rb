module Spina
  module Admin
    class PagesController < AdminController
      before_action :set_locale
      before_action :set_page, only: [:edit, :edit_content, :edit_template, :update, :destroy, :children]

      def index
        add_breadcrumb I18n.t('spina.website.pages'), spina.admin_pages_path
        redirect_to admin_pages_path unless current_admin_path.starts_with?('/pages')
        @pages = Page.active.sorted.roots.regular_pages.includes(:translations)
      end

      def new
        @resource = Resource.find_by(id: params[:resource_id])
        @page = Page.new(view_template: params[:view_template], resource: @resource)
        add_index_breadcrumb
        if current_theme.new_page_templates.any? { |template| template[0] == params[:view_template] }
          @page.view_template = params[:view_template]
        end
        add_breadcrumb I18n.t('spina.pages.new')
      end

      def create
        @page = Page.new(page_params.merge(draft: true))
        add_breadcrumb I18n.t('spina.pages.new')
        if @page.save
          @page.navigations << Spina::Navigation.where(auto_add_pages: true)
          redirect_to spina.edit_admin_page_url(@page), flash: {success: t('spina.pages.saved')}
        else
          render partial: 'error', status: :unprocessable_entity
        end
      end

      def edit        
        add_index_breadcrumb
        add_breadcrumb @page.title
      end

      def edit_content
        render Spina::Pages::ContentComponent.new(@page, locale: @locale), layout: false
      end

      def edit_template
        render layout: false
      end

      def update
        Mobility.locale = @locale
        if @page.update(page_params)
          @page.touch
          redirect_to spina.edit_admin_page_url(@page, params: {locale: @locale}), flash: {success: t('spina.pages.saved')}
        else
          render partial: 'error', status: :unprocessable_entity
        end
      end

      def sort
        params[:ids].each.with_index do |id, index|
          Page.where(id: id).update_all(position: index + 1)
        end
        head :ok
      end

      def children
        @children = @page.children.active.sorted
        render layout: false
      end

      def destroy        
        @page.destroy
        redirect_to spina.admin_pages_url
      end

      private

      def set_locale
        @locale = params[:locale] || I18n.default_locale
      end

      def add_index_breadcrumb
        if @page.resource.present?
          add_breadcrumb @page.resource.label, spina.admin_resource_path(@page.resource), class: 'text-gray-400'
        else
          add_breadcrumb I18n.t('spina.website.pages'), spina.admin_pages_path, class: 'text-gray-400'
        end
      end

      def page_params
        params.require(:page).permit!
      end

      def set_page
        @page = Page.find(params[:id])
      end
    end
  end
end
