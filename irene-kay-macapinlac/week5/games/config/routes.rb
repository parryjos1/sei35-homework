Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Magic 8 Ball

  # type the question on the URL and the mball#answer_to will generate a random answer
  get '/mball:query' => 'mball#answer_to'
  # mball#ask

  # Secret Number

  # 1. Blank form
  get '/secretnum' => 'secretnum#form'

  # 2. Form submits here, prints results
  get '/secretnum/results' => 'secretnum#results'

  # Rock Paper Scissors

  # 1. Blank form
  get '/rps' => 'rps#form'

  # 2. Form submits here, does stock lookup, prints results
  get '/rps/lookup' => 'rps#do_lookup'

end
