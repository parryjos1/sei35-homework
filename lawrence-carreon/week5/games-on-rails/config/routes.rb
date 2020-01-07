Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'games#switch'

  #Rock paper scissors
  get '/rock_paper_scissors' => 'rps#player_choice'

  get '/rock_paper_scissors/:throw' => 'rps#play_game'

  #Magic Conch/ 8-ball
  get '/magic_conch' => 'magicconch#home'

  get '/magic_conch/:question' => 'magicconch#user_response'

  #Secret Number
  get '/secret_number' => 'secretnumber#home'

  get '/secret_number/:guess' => 'secretnumber#played'
end
