Rails.application.routes.draw do

  root 'home#index'
  resources :contacts
  get '/home/amp'
end
