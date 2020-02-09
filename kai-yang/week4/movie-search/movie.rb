require 'pry'
require 'httparty'

url = 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien'

response = HTTParty.get url

binding.pry

puts "stop here please"

# <% @arr.each do |item|%>
# <% item['title']%>
# <% end %>
