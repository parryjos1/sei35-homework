Rails.application.routes.draw do

  root to: 'superheroes#index'

  resources :superheros

  resources :villains

end
