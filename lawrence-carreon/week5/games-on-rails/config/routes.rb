Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'games#switch'

  get '/rock_paper_scissors' => 'rock_paper_scissors#player_choice'

  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#play_game'

  get 'magic'
end
