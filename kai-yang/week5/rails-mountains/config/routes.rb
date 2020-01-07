Rails.application.routes.draw do
  # CREATE
  # 1. show form
  get '/mountains/new' => 'mountains#new'
  # 2. post and redirect
  post 'mountains' => 'mountains#create'

  # READ
  # 1. index of mountains
  get '/mountains' => 'mountains#index'
  # 2. details of mountains
  get '/mountains/:id' => 'mountains#show', as: 'mountain'

  # UPDATE
  # 1. show pre filled form
  get '/mountains/:id/edit' => 'mountains#edit', as: 'mountain_edit'
  # 2. post form
  post '/mountains/:id' => 'mountains#update'

  # DESTROY
  get '/mountains/:id/delete' => 'mountains#destroy', as: 'mountain_destroy'
end
