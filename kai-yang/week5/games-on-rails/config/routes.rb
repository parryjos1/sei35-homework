Rails.application.routes.draw do
  # choose games
  get '/choose_games' => 'cg#home'


  # Magic 8 Ball
  # 1. get user's questions
  get '/choose_games/questions' => 'magic8ball#ask_questions'
  # 2. answer questions
  get '/choose_games/questions/answers' => 'magic8ball#answer_questions'

  # Secret Number
  # 1. submit numbers
  get '/choose_games/numbers' => 'secretnumber#pick_number'
  # 2. show result
  get '/choose_games/numbers/result' => 'secretnumber#show_result'

  # Rock Paper Scissors
  # 1.Choose
  get '/choose_games/rock_paper_scissors' => 'rps#play'
  # 2. check
  get '/choose_games/rock_paper_scissors/:throw' => 'rps#check'
end
