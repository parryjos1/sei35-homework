Rails.application.routes.draw do

  # CREATE
  get '/bands/new' => 'bands#new'

  post '/bands' => 'bands#create'

  # READ
  get '/bands' => 'bands#index'

  get '/bands/:id' => 'bands#show', as: 'band'

  # UPDATE
  # Pre-fill form edit
  get '/bands/:id/edit' => 'bands#edit', as: 'band_edit'

  post '/bands/:id' => 'bands#update'

  get 'bands/:id/delete' => 'bands#destroy', as: 'band_destroy'

end
