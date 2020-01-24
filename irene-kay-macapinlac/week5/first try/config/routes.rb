Rails.application.routes.draw do
  # CREATE
  # 1. New (blank) form
  get '/signs/new' => 'signs#new'

  # 2. Form submit, create, redirect
  post '/signs' => 'signs#create'


  # READ
  # 1. Index of signs
    get '/signs' => 'signs#index'

  # 2. show page for one sign
  get '/signs/:id' => 'signs#show', as: 'sign'


  # UPDATED
  # 1. Pre-filled edit Form
  get '/signs/:id/edit' => 'signs#edit', as: 'sign_edit'

  # 2. Form submit, update, redirect
  post '/signs/:id' => 'signs#update'

  # DESTROY
  get '/signs/:id/delete' => 'signs#destroy', as: 'sign_destroy'
end
