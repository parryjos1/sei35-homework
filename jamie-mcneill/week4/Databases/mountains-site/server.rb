require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' # to talk to your SQL database
require 'pry'

#main function

def db_query( sql ) #function with sql as an argument

  db = SQLite3::Database.new 'database.db'
  #create a connection to the database and store connection in db variable.

  db.results_as_hash = true
  #Converts the results of the database to an object with key value pairs.

  # Debugging output in the terminal:
  puts '=========================='
  puts sql
  puts '=========================='

  results = db.execute (sql)
  #whatever is called as an argument in the below routes will be added on to the execute object and will create, read, update or delete data.

  db.close

  results

end

# Home page

get '/' do

  erb :home

end

# CREATE routes

#1. Show blank form to fill out

get '/mountain/new' do

  erb :new

end

#2. form submits to here with a post request

post '/mountain' do

sql = "INSERT INTO mountain (name, location, height, image_url)
  VALUES (
    '#{ params[:name]}',
    '#{ params[:location]}',
     #{ params[:height]},
    '#{ params[:image_url] }'
  );"

  #execute the query by calling the function above and entering the results of the form in to the database.
  db_query (sql)

 #redirect to the mountains page - from there we can see the mountain was added and it also prevents a reload from re-inserting this mountain to the db.
 redirect '/mountain'

end

# Read routes

# 1. Index of all mountains in table

get '/mountain' do

  @results = db_query ( "SELECT * FROM mountain;" )
  #links to the master db_query function and parses in the command of select all from mountain file and stores the results in @results.

erb :index   #links to the index erb file where a loop is run to print the names of the mountains and links to their individual pages.

end

# 2. Details page for a single mountain.

get '/mountain/:id' do

  @mountain = db_query ( "SELECT * FROM mountain WHERE id = #{ params[:id] };" )

  # We know there's only one row when we query by Id.
  @mountain = @mountain.first

  #rails convention
  erb :show

end

#UPDATE routes

# 1. Pre-filled form

get '/mountain/:id/edit' do

  #We need to get the details of the mountain we're editing so we can pre-fill the form with those details.
  @mountain = db_query ("SELECT * FROM mountain WHERE id = #{ params[:id] };")


  # We know there's only one row when we query by Id.
  @mountain = @mountain.first

  #rails convention
  erb :edit

end

post '/mountain/:id' do
#posts the information that is entered in the edit erb form to the database.

puts params #not sure what this does?

sql = "UPDATE mountain SET
    name = '#{ params[:name]}',
    location = '#{ params[:location]}',
    height = #{ params[:height]},
    image_url ='#{ params[:image_url] }'
    WHERE id = #{ params[:id] };"

#saves to the sql variable the results of the information that is entered in to the form on the edit erb page, which is then parsed through as an argument to the db_query function. The function then updates the information for the mountain in the database.

db_query sql  #execute the query and ignore the result

redirect "/mountain/#{ params[:id] }"

end

# DELETE routes

get '/mountain/:id/delete' do

puts params #not sure what this does?

sql = "DELETE FROM mountain WHERE id = #{ params[:id] };"

db_query sql  #execute the query and ignore the result

redirect "/mountain"

end
