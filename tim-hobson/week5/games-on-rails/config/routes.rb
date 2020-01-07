Rails.application.routes.draw do

  root to: 'pages#main'

  get '/magic8ball' => 'magic8ball#ask'

  get '/magic8ball/behold' => 'magic8ball#behold'

  get '/luckynumber' => 'luckynumber#guess'

  get '/luckynumber/reveal' => 'luckynumber#reveal'

  get '/rockpaperscissors' => 'rps#ready'

  get '/rockpaperscissors/:throw' => 'rps#result'
  
end
