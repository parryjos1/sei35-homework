Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/index" => "mountains#index"
  get "/index/create" => "mountains#create"
  post "/creation" => "mountains#creation"
  get "/index/:id/editing" => "mountains#editing", as: "editing"
  get "/index/:id/edit" => "mountains#edit", as: "edit"
  get "/index/:id/destroy" => "mountains#destroy", as:"destroy"
  get "/index/:id" => "mountains#display", as:"mountain"
end
