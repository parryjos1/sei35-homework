# load all packages
require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"
# 1. CREATE = get
# 2. READ = get
# 3. UPDATE = post


# firstly define a function to make database querys
# (sql) is strings used to "SELECT", "INSERT" and 'UPDATE'
# ruby functions don't need brackets
def db_query sql
  #first make a connection between sqlite3 and database save to variable
  # 'database.db' is the created db folder
  # :: looks for class inside a module
  # band_db has created a link to the databse
  band_db = SQLite3::Database.new 'database.db'
  # turn the connection into a hash for easy access
  band_db.results_as_hash = true
  # excecute a query selct all the bands
  puts "================"
puts sql
puts "================"
  results = band_db.execute sql
  #close the database
  band_db.close
  #return results (last line of ruby function)
  results
# close the function
end

#create home page with '/' route
# READ ROUTES
# 1. get the index of the bands in the table
# use 'db_query' method access databse and return Hash
# takes sql argument SELECT, UPDATE
#save access as 'global' variable with @
get '/bands' do
#binding.pry
    @results = db_query "SELECT * FROM bands"
  erb :home
end

# CREATE ROUTES
# 1. Show the blank form for the band to be filled
get '/bands/new' do
    @new_band = db_query "SELECT * FROM bands"
    erb :new
end

# submit data to database through from with post request
post '/bands' do
# similar to tables creation but INSERT instead
# make sure the names are link in the form
  sql = "INSERT INTO bands (name, genre, song, year, together, album)
    VALUES (
      '#{params[:name]}',
      '#{params[:genre]}',
      '#{params[:song]}',
      #{params[:year]},
      #{params[:together]},
      '#{params[:album]}'
    );"
# binding.pry
#run the query (pass infomation into db i think) ask
  db_query sql
# redirect back to home page which lists the bands
# needs to redirect to the user doesn't create mutliple items
#  while reloading
  redirect '/bands'
end
# Create link to individual bands page and  using band id as routes
get '/bands/:id' do
#go to bands and return clicked bands id
  @band = db_query "SELECT * FROM bands WHERE id = #{params[:id]}"
# binding.pry
#  this takes band out of array it is nested in and returns only the band hash
  @band = @band.first
  erb :display
end

# UPDATE similar to add but use UPDATE
