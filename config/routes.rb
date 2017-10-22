Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root("static_pages#index")

  namespace :api do
    namespace :v1 do
      resources :interests, only: [:index, :show]
    end
  end

  get '*path', to: 'static_pages#index'
end
