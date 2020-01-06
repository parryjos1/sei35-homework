Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Magic 8 Ball
  # 1. get user's questions
  get '/questions' => 'magic8ball#ask_questions'
  # 2. answer questions
  get '/questions/answers' => 'magic8ball#answer_questions'

  # Secret Number
  # 1. submit numbers
  get '/numbers' => 'secretnumber#pick_number'
  # 2. show result
  get '/numbers/result' => 'secretnumber#show_result'
end
