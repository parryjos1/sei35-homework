require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'sequel'
require 'pry'

DB = Sequel.sqlite('database.db')
class Mountains < Sequel::Model(:mountains); end

get '/' do
  erb :home
end

get '/mountains' do
  dataset = DB.from(:mountains)

  @results = dataset.all

  erb :index
end

get '/mountains/new' do
  erb :new
end

get '/mountains/:id' do
  dataset = DB[:mountains][{id: params[:id]}]

  @results = dataset

  erb :show
end

get '/mountains/:id/edit' do
  dataset = DB[:mountains][{id: params[:id]}]

  @results = dataset

  erb :edit
end

get '/mountains/:id/delete' do
  Mountains[params[:id]].delete

  redirect '/mountains'
end

post '/mountains/:id' do
  id = params[:id]
  params.reject! { |key| key == "id"}

  Mountains.filter(id: id).first.update(params)

  redirect "/mountains/#{id}"
end

post '/mountains' do
  Mountains.insert(params)

  redirect "/mountains"
end