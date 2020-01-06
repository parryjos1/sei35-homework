require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb :home
end

get '/search' do
    erb :search_form
end

get '/search/results' do

    BASE_URL = 'https://api.themoviedb.org/3'
    API_KEY = '24d863d54c86392e6e1df55b9a328755'
    
    @query = params[:query]

    url = "#{BASE_URL}/search/movie?api_key=#{API_KEY}&query=#{@query}"
    response = HTTParty.get( url )

    @results = response['results']

    erb :search_results
    
end

get '/details/:id' do
    BASE_URL = 'https://api.themoviedb.org/3'
    API_KEY = '24d863d54c86392e6e1df55b9a328755'
    @id = params[:id]
    url = "#{BASE_URL}/movie/#{@id}?api_key=#{API_KEY}"
    response = HTTParty.get( url )
    @movie = response
    @title = result['title']
    erb :details_id
end