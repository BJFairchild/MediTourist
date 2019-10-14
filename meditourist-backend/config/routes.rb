Rails.application.routes.draw do
  resources :clinics
  resources :trips
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/login', to: 'auth#create'
  post '/users', to: 'users#create'
  post '/getcountries', to: 'scrape#getCountryChoices'
  post '/getclinics', to: 'scrape#getClinics'
  post '/getclinicoverview', to: 'scrape#getClinicOverview'
end
