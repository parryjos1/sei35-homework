require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :search_form
end

get '/lookup' do
  @title = params[:title]

  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@title}"
  response = HTTParty.get url

  @results = response['results']

  #response['results'].inspect
  erb :search_results
end