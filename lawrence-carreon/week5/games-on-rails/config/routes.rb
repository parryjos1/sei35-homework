Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'games#switch'

  get '/rock_paper_scissors' => 'rps#player_choice'

  get '/rock_paper_scissors/:throw' => 'rps#play_game'

  get '/magic_conch' => 'magicconch#home'

  get '/magic_conch/:question' => 'magicconch#user_response'

  get '/secret_number' => 'secretnumber#home'

  get '/secret_number/:guess' => 'secretnumber#played'
end
