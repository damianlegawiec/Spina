Spina::Engine.routes.draw do
  # Backend
  namespace :admin, path: Spina.config.backend_path do
    root to: "pages#index"

    resource :account
    resource :theme, controller: :theme

    get "/settings/:plugin", to: "settings#edit", as: :edit_settings
    patch "/settings/:plugin", to: "settings#update", as: :settings

    resources :users

    # Sessions
    resources :sessions
    get "login" => "sessions#new"
    get "logout" => "sessions#destroy"

    # Passwords
    resources :password_resets

    # Media library
    get 'media_library' => 'images#index', as: "media_library"

    resources :pages do
      member do
        get :edit_content
        get :edit_template
        get :children
      end
      
      resource :move, controller: "move_pages"

      post :sort, on: :collection
    end
    resource :layout, controller: :layout, only: [:edit, :update]

    resources :resources, only: [:show, :edit, :update]

    resources :navigations do
      post :sort, on: :member
      resources :navigation_items
    end

    resources :attachments do
      collection do
        get 'select/:page_part_id' => 'attachments#select', as: :select
        post 'insert/:page_part_id' => 'attachments#insert', as: :insert
        get 'select_collection/:page_part_id' => 'attachments#select_collection', as: :select_collection
        post 'insert_collection/:page_part_id' => 'attachments#insert_collection', as: :insert_collection
      end
    end
    resources :rename_files

    resources :media_folders do
      resources :images
    end
    
    namespace :file_manager do
      resources :images
      resources :attachments
    end

    resources :images

    namespace :media_picker do
      resources :images
      resources :media_folders
    end

    get :media_picker, to: 'media_picker#show'
    post :media_picker, to: 'media_picker#select'
  end

  # Sitemap
  resource :sitemap

  # Robots.txt
  get '/robots', to: 'pages#robots', constraints: { format: 'txt' }

  unless Spina.config.disable_frontend_routes
    # Frontend
    root to: "pages#homepage"

    # Pages
    get '/:locale/*id' => 'pages#show', constraints: {locale: /#{Spina.config.locales.join('|')}/ }
    get '/:locale/' => 'pages#homepage', constraints: {locale: /#{Spina.config.locales.join('|')}/ }
    get '/*id' => 'pages#show', as: "page", controller: 'pages', constraints: lambda { |request|
      (!(Rails.env.development? && request.env['PATH_INFO'].starts_with?('/rails/') || request.env['PATH_INFO'].starts_with?("/#{Spina.config.backend_path}") || request.env['PATH_INFO'].starts_with?('/attachments/'))) && request.path.exclude?("rails/active_storage")
    }
  end

end
