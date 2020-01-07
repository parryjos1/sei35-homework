require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'uri'

def get_url_for_movies keywords
  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{URI::encode(keywords)}"
end

def get_url_for_website id
  url = "https://api.themoviedb.org/3/movie/#{id}?api_key=24d863d54c86392e6e1df55b9a328755"
end


get '/' do
  erb :form
end

get '/movies' do
  @keywords = params[:search_keywords]

  # binding.pry

  response = HTTParty.get get_url_for_movies @keywords

  @titles = response['results']


  if response['total_results'] == 1
    # binding.pry
    response['results'].first['id']

    res = HTTParty.get get_url_for_website response['results'].first['id']
    # binding.pry
    @movie_url = res['homepage']
  end

  erb :movie_list
end
