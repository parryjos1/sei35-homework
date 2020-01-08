require 'pry'
require 'httparty'




# url = 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien'
#
# response = HTTParty.get url
#
# binding.pry
#
# puts 'stop here please'



#my Search

# @title = params[:title]
@search_title = 'face'


url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@search_title}"

response = HTTParty.get url
@title = response['results'].first['title']
@poster_path = response['results'].first['poster_path']
@poster_link = "https://image.tmdb.org/t/p/w500/" + @poster_path
@id = response['results'].first['id']

@total_pages = response['total_pages']


page = 3
url_pages = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@search_title}&page=#{page}"

pages = HTTParty.get url_pages

# use ++ and -- to change page numbers
#####
#possible returns from normal
# "popularity"
# "id"
# "video"
# "vote_count"
# "vote_average"
# "title"
# "release_date"
# "original_language"
# "original_title"
# "genre_ids"
# "backdrop_path"
# "adult"
# "overview"
# "poster_path"

#####
#possible returns from details
# details.keys
# => ["adult",
#  "backdrop_path",
#  "belongs_to_collection",
#  "budget",
#  "genres",
#  "homepage",
#  "id",
#  "imdb_id",
#  "original_language",
#  "original_title",
#  "overview",
#  "popularity",
#  "poster_path",
#  "production_companies",
#  "production_countries",
#  "release_date",
#  "revenue",
#  "runtime",
#  "spoken_languages",
#  "status",
#  "tagline",
#  "title",
#  "video",
#  "vote_average",
#  "vote_count",
#  "videos"]



url2 = "https://api.themoviedb.org/3/movie/#{ @id }?api_key=24d863d54c86392e6e1df55b9a328755&append_to_response=videos"

details = HTTParty.get url2

binding.pry

puts 'stop here please'
