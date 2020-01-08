Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# Magic Eight Ball:

 get '/ball/:question' => 'ball#eightball'

 #secret number:

 #shows form
 get '/secret/' => 'secretnum#form'

 # Form submits here, user enters number, displays result
 get '/secret/answer' => 'secretnum#answer'

 # Rock paper scissors:

 get '/games/rock_paper_scissors/:throw' => 'rps#play'

end
