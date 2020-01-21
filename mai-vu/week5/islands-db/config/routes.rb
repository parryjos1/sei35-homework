# http://localhost:3000/rails/info/route to inspect routes.


Rails.application.routes.draw do

  # CREATE
  get '/islands/new' => 'islands#new'

  post '/' => 'islands#create'


  # READ
  root to: 'islands#index', as: 'islands'   #helper is islands_path

  get '/islands/:id' => 'islands#show', as: 'island'   #helper is island_path


  # UPDATE
  get '/islands/:id/edit' => 'islands#edit', as: 'island_edit'

  post '/islands/:id' => 'islands#update'


  # DELETE
  get '/islands/:id/delete' => 'islands#delete', as: 'island_delete'

end
