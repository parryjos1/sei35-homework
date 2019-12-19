require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

# DB query function
def db_query(sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  # debugging
  puts "+++++++"
  puts sql
  puts "+++++++"

  results = db.execute sql
  db.close

  results

end
# Home page
get '/' do
  erb :home
end

#CREATE routes
get '/mountains/new' do
  erb :new
end

post '/mountains' do
  sql = "INSERT INTO mountains (name, height_m, range, parent_mountain, first_ascended, country, image_url)
  VALUES (
      '#{params[:name]}',
       #{params[:height_m]},
      '#{params[:range]}',
      '#{params[:parent_mountain]}',
      #{params[:first_ascended]},
      '#{params[:country]}',
      '#{params[:image_url]}'
  );"

  db_query sql
  redirect '/mountains'
end


#READ routes
get '/mountains' do
  @results = db_query "SELECT * FROM mountains;"

  # binding.pry
  erb :index
end

get '/mountains/:id' do
  @mountain = db_query "SELECT * FROM mountains WHERE id = #{params[:id]};"

  @mountain = @mountain.first
  erb :show
end
#UPDATE routes

get '/mountains/:id/edit' do
  @mountain = db_query "SELECT * FROM mountains WHERE id = #{params[:id]};"

  @mountain = @mountain.first

  erb :edit
end

post '/mountains/:id' do
  sql = "UPDATE mountains SET
    name = '#{params[:name]}',
    height_m = #{params[:height_m]},
    range = '#{params[:range]}',
    parent_mountain = '#{params[:parent_mountain]}',
    first_ascended = #{params[:first_ascended]},
    country = '#{params[:country]}',
    image_url = '#{params[:image_url]}'
    
  WHERE id = #{params[:id]};"

  db_query sql
  redirect "/mountains/#{params[:id]}"
end
#DELETE routes
