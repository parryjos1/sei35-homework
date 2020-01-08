Rails.application.routes.draw do

  # root to: 'pages#home'

  get '/' => 'pages#home'

# Magic 8 Ball

  # Blank form
  get '/game1' => 'magic#form'

  # Form submits here
  get '/magic/result' => 'magic#get_result'


# Secret Number

  get '/game2' => 'game#secret_number'

  get '/game/number' => 'game#get_number'


end
