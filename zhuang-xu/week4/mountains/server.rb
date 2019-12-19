require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'sequel'
require 'pry'

get '/' do
  erb :home
end

get '/mountains' do
  DB = Sequel.sqlite('database.db')
  dataset = DB.from(:mountains)

  @results = dataset.all

  erb :index
end


get '/mountains/:id' do
  DB = Sequel.sqlite('database.db')
  dataset = DB[:mountains][{id: params[:id]}]

  @results = dataset

  erb :show
end


