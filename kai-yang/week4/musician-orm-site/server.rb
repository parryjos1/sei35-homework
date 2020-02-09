require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new STDERR

after do
  ActiveRecord::Base.connection.close
end

class Musician < ActiveRecord::Base
  has_many :songs
end

class Song < ActiveRecord::Base
  belongs_to :musicians
end

# Home page
get '/' do
  erb :home
end

# CREATE
get '/musicians/new' do
  erb :new
end

post '/musicians' do
  Musician.create(
    name: params[:name],
    year_active: params[:year_active],
    hometown: params[:hometown],
    labels: params[:labels],
    occupations: params[:occupations],
    still_active: params[:still_active],
    image_url: params[:image_url]
  )

  redirect '/musicians'
end

# READ
get '/musicians' do
  @results = Musician.all
  erb :index
end

get '/musicians/:id' do
  @musician = Musician.find params[:id]
  erb :show
end

# UPDATE
get '/musicians/:id/edit' do
  @musician = Musician.find params[:id]
  erb :edit
end

post '/musicians/:id' do
  musician = Musician.find params[:id]
  musician.update(
    name: params[:name],
    year_active: params[:year_active],
    hometown: params[:hometown],
    labels: params[:labels],
    occupations: params[:occupations],
    still_active: params[:still_active],
    image_url: params[:image_url]
  )

  redirect "/musicians/#{params[:id]}"
end

# DELETE
get '/musicians/:id/delete' do
  Musician.destroy params[:id]
  redirect '/musicians'
end
