Rails.application.routes.draw do

  root to: 'games#home'


  get 'games/magic8ball' => 'magic#home'
  get '/games/magic8ball/question' => 'magic#question'
  get '/games/magic8ball/answer' => 'magic#answer'


  get '/games/secretnumber' => 'secret#home'
  get '/games/secretnumber/result' => 'secret#result'


  get '/games/rockpaperscissors' => 'rps#home'
  get '/games/rockpaperscissors/:throw' => 'rps#result'

end
