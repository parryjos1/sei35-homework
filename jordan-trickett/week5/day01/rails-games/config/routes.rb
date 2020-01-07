Rails.application.routes.draw do

  #8Ball
  #blank form for user entry
  get '/magicball' => 'magicball#form'

  #submit here
  get '/magicball/answer' => 'magicball#answer'


  #secret number
  #number selection
  get '/number' => 'number#form'

  #return route
  get '/number/checker' => 'number#checker'


  #rock paper scissors
  get '/rock_paper_scissors' => 'rps#input'

  #return route
  get '/rock_paper_scissors/:id' => 'rps#result'

end
