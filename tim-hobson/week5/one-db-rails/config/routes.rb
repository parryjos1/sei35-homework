Rails.application.routes.draw do

  root to: 'monkeys#index'



 #create

 get '/monkeys/new' => 'monkeys#new'

 post '/monkeys' => 'monkeys#create'


 #read
 get '/monkeys' => 'monkeys#index'

 get '/monkeys/:id' => 'monkeys#show', as: 'monkey'

 #update

 get '/monkeys/:id/edit' => 'monkeys#edit', as: 'monkey_edit'

 post '/monkeys/:id' => 'monkeys#update'

 #destroy

 get '/monkeys/:id/delete' => 'monkeys#destroy', as: 'monkey_destroy'

end
