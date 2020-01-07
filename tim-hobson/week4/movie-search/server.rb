require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do

  erb :search_title

end

get '/lookup' do

  @search_title = params[:search_title]

  p @search_title

  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{ @search_title }"

  response = HTTParty.get url

  @title = response['results'].first['title']
  @release_year = response['results'].first['release_date'][0..3]
  @poster_path = response['results'].first['poster_path']
  @id = response['results'].first['id']
  @poster_link = "https://image.tmdb.org/t/p/w500/" + @poster_path


  erb :listresults

end

get '/listresults' do

  @search_title = params[:search_title]

  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{ @search_title }"

  response = HTTParty.get url

  @total_pages = response['total_pages']
  page = 1
  url_pages = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@search_title}&page=#{page}"
  @page_x = HTTParty.get url_pages
  # binding.pry

  erb :listresults

end

get '/listresultsgoto' do

  page_go_to = params[:page_num]
  p @search_title

  # binding.pry
  url_pages = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@search_title}&page=#{page_go_to}"

  @page_x = HTTParty.get url_pages

  erb :listresults

end


get '/details' do

  @id = params[:id]
  url2 = "https://api.themoviedb.org/3/movie/#{ @id }?api_key=24d863d54c86392e6e1df55b9a328755&append_to_response=videos"
  details = HTTParty.get url2
  @title = details['title']
  @release_date = details['release_date']
  poster_path = details['poster_path']
  @poster_link = "https://image.tmdb.org/t/p/w500/" + poster_path
  @tagline = details['tagline']


  if details['videos']['results'].empty?
    erb :details_no_youtube
  elsif details['videos']['results'][0]['site'] == 'YouTube'
    @youtube_key = details['videos']['results'][0]['key']
    erb :details
  else
    erb :details_no_youtube
  end

  # binding.pry

  # p 'binding stop plesase'
  # puts 'pause'

  # erb :details

end





# get '/solofind_movie' do
#
#   erb :solofind_movie
#
# end
#
# get '/sololookup' do
#
#   @solosearch_title = params[:solosearch_title]
#
#   p @solosearch_title
#
#   url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{ @solosearch_title }"
#
#   response = HTTParty.get url
#   # binding.pry
#
#   @title = response['results'].first['title']
#   @release_date = response['results'].first['release_date'][0..3]
#   @poster_path = response['results'].first['poster_path']
#   @id = response['results'].first['id']
#   @poster_link = "https://image.tmdb.org/t/p/w500/" + @poster_path
#
#
#   p 'binding stop plesase'
#   erb :soloresult
#
# end
