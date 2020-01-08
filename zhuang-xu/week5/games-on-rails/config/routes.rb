Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'main#welcome'

  get '/magic8' => 'magic8#form'
  get '/magic8/answer' => 'magic8/answer'

  get '/numbers' => 'numbers#form'
  get '/numbers/result' => 'numbers#result'

  get '/rps' => 'rps#form'
end
