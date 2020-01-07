Rails.application.routes.draw do
  get "/magic" => "magic#question"
  get "/secret" => "secret#guess"
  get "/rpc" => "rpc#throw"
  get "/magic/answer" => "magic#answer"
  get "/secret/answer" => "secret#answer"
  get "/rpc/throwing" => "rpc#throwing"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
