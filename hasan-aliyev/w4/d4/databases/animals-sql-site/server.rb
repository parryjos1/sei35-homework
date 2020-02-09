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
get'/animals/new' do
   erb :new

end

#2.Form submits to here with a POST request
post '/animals' do

  # params.inspect

  sql = "INSERT INTO animals (name, species, description, roundness, alive, age, image_url)
      VALUES(
        '#{params[:name]}',
        '#{params[:species]}',
        '#{params[:description]}',
         #{params[:roundness]},
         #{params[:alive]},
         #{params[:age]},
        '#{params[:image_url]}'
      );"

#execut the query and ignore the result
db_query sql
#redirect to the index of animals -from there we
#can see the animal was added; and it also prevents
#a reload from re-inserting this animal to the DB
redirect '/animals'


end






#READ routes
# 1. index of all animals in TABLE
get '/animals' do
  @results = db_query "SELECT * FROM animals"
  erb :index
end



#2 details page for a single animal(row)

get '/animals/:id' do

@animal = db_query "SELECT * FROM animals WHERE id = #{params[:id]}"

@animal = @animal.first



  erb :show
end

#UPDATE routes

get '/animals/:id/edit' do
  @animal = db_query "SELECT * FROM animals WHERE id = #{params[:id]};"
  @animal = @animal.first
  puts @animal
  erb :edit
end




post '/animals/:id' do

  # params.inspect

  sql = "UPDATE animals SET

        name = '#{params[:name]}',
        species = '#{params[:species]}',
        description = '#{params[:description]}',
        roundness = #{params[:roundness]},
         alive = #{params[:alive]},
         age = #{params[:age]},
        image_url = '#{params[:image_url]}',
        WHERE id = #{params[:id]};"


#execut the query and ignore the result
db_query sql
redirect "/animals/#{params[:id]}"
end
#DELETE routes
