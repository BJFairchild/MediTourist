Rails.application.routes.draw do
  resources :clinics
  resources :trips
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/login', to: 'users#login'
  post '/users', to: 'users#create'
end
