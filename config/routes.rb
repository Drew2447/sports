Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/basketballs', to: 'basketballs#index'
    get '/basketballs/:id', to: 'basketballs#show'
    post '/basketballs', to: 'basketballs#create'
    put '/basketballs/:id', to: 'basketballs#update'
    delete '/basketballs/:id', to: 'basketballs#destroy'

    get '/basketballs/:basketball_id/players', to: 'players#index'
    get '/basketballs/:basketball_id/players/:id', to: 'players#show'
    post '/basketballs/:basketball_id/players', to: 'players#create' 
    put '/basketballs/:basketball_id/players/:id', to: 'players#update'
    delete '/basketballs/:basketball_id/players/:id', to: 'players#destroy' 

    get '/players', to:  'players#all_players' 
  end
end
