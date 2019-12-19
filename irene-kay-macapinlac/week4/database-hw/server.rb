require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' # to talk to our SQL database
require 'pry'

def db_query( sql )

  # connection to the database
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  # Debugging output in the terminal:
  puts '================================'
  puts sql
  puts '================================'
  results = db.execute sql
  db.close

  results #return the result of the query
end

#Landing page
get '/' do
  erb :home
end

#Create routes

  # 1. Show the blank form to be filled out
  get '/mountains/new' do
    erb :new
  end

  # 2. Show the page with the list of mountains
  get '/mountains' do
    # params.inspect

    sql = "INSERT INTO mountains (name, location, description, favourite, image_url)
    VALUES (
      '#{params[:name]}',
      '#{params[:location]}',
      '#{params[:description]}',
      #{params[:favourite]},
      '#{params[:image_url]}'
      );"

      # execute the query and ignore the result
      db_query sql

      redirect '/mountains'

    end

  # Read routes
  # 1. Index all mountains in the table
  get '/mountains/' do
    @results = db_query "SELECT * FROM mountains"
    erb :index
  end


  # 2. details page for every single mountain
  get '/mountains/:id' do

    @mountain = db_query "SELECT * FROM mountains WHERE id = #{ params[:id] };"

    @mountain = @mountain.first

    erb :show
  end

  #Update routes
    # 1.
    get '/mountains/:id/edit' do
    @mountain = db_query "SELECT * FROM mountains WHERE id =
    #{ params[:id] };"
    @mountain = @mountain.first

    erb :edit
  end

  # 2.
  post '/mountains/:id' do

  sql = "UPDATE mountains SET
    name = '#{params[:name]}',
    location = '#{params[:location]}',
    description = '#{params[:description]}',
    favourite = #{params[:favourite]},
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};"

    # execute the query and ignore the result
    db_query sql

    redirect "/mountains/#{params[:id]}"

  end



  #Delete routes
