Rails.application.routes.draw do
  get 'welcome/index'
    # resources :waves do
    #   resources :surfers
    # end

    resources :waves
    resources :surfers

  root 'welcome#index'
end
