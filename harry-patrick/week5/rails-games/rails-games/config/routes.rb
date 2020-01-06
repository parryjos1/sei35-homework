Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/eightball' => 'eightball#index'

  get '/eightball/answer' => 'eightball#show'

  get '/secretnumber' => 'secretnumber#index'

  get '/secretnumber/answer' => 'secretnumber#show'

  get '/rps' => 'rps#index'

  get 'rps/result' => 'rps#show'

end
