Rails.application.routes.draw do
  get 'reservations/book'
  get '/flights' => 'flights#index'
  get '/flights/:id' => 'flights#show'

  get '/flights/search/:origin/:destination' => 'flights#search'
  post '/reservation/:name/:col/:row' => 'reservations#book'

end
