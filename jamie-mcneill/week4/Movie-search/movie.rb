require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :search_form
end

get '/lookup' do     #Type /lookup in the action section of the form header

    @movie = params[:movie_name] #stores the movie name entered in to the input section of the form. The name must match the name in the input of the form.

    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie}"  #Add the movie enterered in to the form on to the end of the URL using the stored instance variable.

    response = HTTParty.get(url) #using HTTParty.get parse the url in as an argument to look up the film.

    # binding.pry
    # puts "stop here please"

    @title = response["results"].first["title"]

    @overview = response["results"].first["overview"]

    @popularity = response["results"].first["popularity"]

    @poster = response["results"].first["poster_path"]

    #search through the data using Ruby syntax to seach within an object with an array of objects.

    erb :search_results #show the results in the search results erb view.

end
