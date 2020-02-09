require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' # to talk to our SQL database
require 'pry'

def db_query(sql)

  db = SQLite3::Database.new 'database.db'

  # binding.pry
  db.results_as_hash = true
  puts '=============='
  puts sql
  puts '=============='

  results = db.execute sql
  db.close
  results

end


get '/' do

  erb :home
end
#DRY up our routes by creating a reusable DB query function

#CREATE route
#1. show the blank form to be filled route
get'/mountains/new' do
   erb :new

end

#2.Form submits to here with a POST request
post '/mountains' do

  # params.inspect

  sql = "INSERT INTO mountains (name, description, snow, heigth, age, image_url)
      VALUES(
        '#{params[:name]}',
        '#{params[:description]}',
         #{params[:snow]},
         #{params[:heigth]},
         #{params[:age]},
        '#{params[:image_url]}'
      );"

#execut the query and ignore the result
db_query sql
#redirect to the index of mountains -from there we
#can see the animal was added; and it also prevents
#a reload from re-inserting this animal to the DB
redirect '/mountains'


end






#READ routes
# 1. index of all mountains in TABLE
get '/mountains' do
  @results = db_query "SELECT * FROM mountains"
  erb :index
end



#2 details page for a single animal(row)

get '/mountains/:id' do

@mountain = db_query "SELECT * FROM mountains WHERE id = #{params[:id]};"

@mountain = @mountain.first



  erb :show
end

#UPDATE routes
# 1. Show pre-filled form
get '/mountains/:id/edit' do
  @mountain = db_query "SELECT * FROM mountains WHERE id = #{params[:id]};"
  @mountain = @mountain.first

  erb :edit
end




post '/mountains/:id' do

  # params.inspect

  sql = "UPDATE mountains SET

        name = '#{params[:name]}',
        description = '#{params[:description]}',
        snow = #{params[:snow]},
        heigth = #{params[:heigth]},
        age = #{params[:age]},
        image_url = '#{params[:image_url]}'
        WHERE id = #{params[:id]};"


#execut the query and ignore the result
db_query sql
redirect "/mountains/#{params[:id]}"
end
#DELETE routes

get "/mountains/:id/delete" do
  db_query "DELETE FROM mountains WHERE id = #{ params[:id] }"

  # No template to show, redirect to the index
  redirect "/mountains"
end
