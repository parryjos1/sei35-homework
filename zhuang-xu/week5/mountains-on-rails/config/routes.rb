Rails.application.routes.draw do
  root to: 'mountains#index'

  get '/mountains' => 'mountains#index'

  get '/mountains/new' => 'mountains#new'

  get 'mountains/:id' => 'mountains#show', as: 'mountain'

  get 'mountains/:id/edit' => 'mountains#edit', as: 'mountain_edit'

  post '/mountains' => 'mountains#create'

  post '/mountains/:id' => 'mountains#update'

  get '/mountains/:id/delete' => 'mountains#destroy', as: 'mountain_destroy'
end
