Rails.application.routes.draw do

  #Create



  #READ
  get '/mountains' => 'mountains#index'

  get '/mountains/:id' => 'mountains#show', as: 'mountain'


  #UPDATE



  #DESTROY



end
