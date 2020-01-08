Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#select'

  get '/magic8ball' => 'magic8ball#ask'

  get '/magic8ball/answers' => 'magic8ball#answers'

  get '/number' => 'secretnumber#number'

  get '/number/validatenumber' => 'secretnumber#result'

  get '/games/rock_paper_scissors/:throw' => 'rps#play'


end
