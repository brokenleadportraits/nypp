Rails.application.routes.draw do
  devise_for :users
  resources :users
  resources :photos
  get 'static_pages/about'

  get 'static_pages/index'
  root 'static_pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
