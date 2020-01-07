Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Magic 8 Ball

  # type the question on the URL and the mball#answer_to will generate a random answer
  get '/mball:query' => 'mball#answer_to'
  # mball#ask

  # Secret Number

  # 1. Blank form
  get '/secretnum' => 'secretnum#form'

  # 2. Form submits here, checks to see a match - guessed number with random number
  get '/secretnum/results' => 'secretnum#results'

  # Rock Paper Scissors

  # 1. Blank form
  get '/rps/:hand' => 'rps#play_hand'


end
