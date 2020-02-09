Rails.application.routes.draw do

  #Create
  #1.Add
  get '/jordans/new' => 'jordans#new'

  #2. Submit
  post '/jordans' => 'jordans#create'

  #Read
  #1. Index page
  get '/jordans' => 'jordans#index'

  #2. show page
  get '/jordans/:id' => 'jordans#show', as: 'jordan'

  #update
  #1. Edit
  get '/jordans/:id/edit' => 'jordans#edit', as: 'jordan_edit'

  #2. Submit
  post '/jordans/:id' => 'jordans#update'

  #Destroy
  get '/jordans/:id/delete' => 'jordans#destroy', as: 'jordan_destroy'

end
