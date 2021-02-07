module Spina
  module Admin
    class PagesController < AdminController
      before_action :set_locale
      before_action :set_page, only: [:edit, :edit_content, :edit_template, :update, :destroy, :children]

      def index
        add_breadcrumb I18n.t('spina.website.pages'), spina.admin_pages_path
        
        if params[:page_collection_id]
          @page_collection = Resource.find(params[:page_collection_id])
          @pages = @page_collection.pages.active.sorted.roots.includes(:translations)
        else
          @pages = Page.active.sorted.roots.main.includes(:translations)
        end
      end

      def new
        page_collection = Resource.find_by(id: params[:page_collection_id])
        @page = Page.new(view_template: params[:view_template], resource: page_collection)
      end

      def create
        @page = Page.new(page_params.merge(draft: true))
        if @page.save
          @page.navigations << Spina::Navigation.where(auto_add_pages: true)
          redirect_to spina.edit_admin_page_url(@page)
        else
          render :new, status: :unprocessable_entity
        end
      end

      def edit        
        add_index_breadcrumb
        add_breadcrumb @page.title
      end

      def edit_content
        @parts = current_theme.view_templates.find do |view_template|
          view_template[:name].to_s == @page.view_template.to_s
        end&.dig(:parts) || []
      end

      def edit_template
        render layout: false
      end

      def update
        Mobility.locale = @locale
        if @page.update(page_params)
          if @page.saved_change_to_draft? && @page.live?
            flash[:confetti] = t('spina.pages.published')
          else
            flash[:success] = t('spina.pages.saved')
          end
          
          redirect_to spina.edit_admin_page_url(@page, params: {locale: @locale})
        else
          add_index_breadcrumb
          Mobility.locale = I18n.locale
          add_breadcrumb @page.title
          flash.now[:error] = t('spina.pages.couldnt_be_saved')
          render :edit, status: :unprocessable_entity
        end
      end

      def sort
        params[:ids].each.with_index do |id, index| 
          Page.where(id: id).update_all(position: index + 1)
        end
        
        flash.now[:info] = t("spina.pages.sorting_saved")
        render_flash
      end

      def children
        @children = @page.children.active.sorted
        render layout: false
      end

      def destroy
        flash[:info] = t('spina.pages.deleted')    
        @page.destroy
        redirect_to spina.admin_pages_url
      end

      private

        def set_locale
          @locale = params[:locale] || I18n.default_locale
        end
  
        def add_index_breadcrumb
          path = spina.admin_pages_path
          if @page.resource
            path = spina.admin_pages_path(page_collection_id: @page.resource_id)
          end
          
          add_breadcrumb t('spina.website.pages'), path, class: 'text-gray-400'
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
