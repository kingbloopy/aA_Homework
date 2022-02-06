Rails.application.routes.draw do

  resources :flowers, only: [:create, :destroy]
  resources :users, only: [:new, :create]
  resources :gardens, only: [:index, :show, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
