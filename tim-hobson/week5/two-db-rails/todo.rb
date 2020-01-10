#term
rails g model Name name:string

rails db:migrate

into the seeds.db

# seeds.db
Cheese.destroy_all

puts "Hello friend, let's add some Cheese:"

Cheese.create name: ''

puts "Created #{ Cheese.all.length} entries:"
puts Cheese.pluck(:name).join(', ')
puts "Complete!"

#term
rails db:seed

rails g controller Cheeses new create index show edit update destroy
#>>>>>> delete the lines from top of routes, and then the scss, coffee, and html for create, update, destroy

#routes
resources :cheeses

then go to the .html files and start working...

then later

#term

rails g controller Wines new create index show edit update destroy

rails g model Wines name:text color:text

rails db:migrate

rails g migration add_artist_id_to_wine artist_id:integer

rails db:migrate

open BOTH model files -
add to Cheese - has_many :works
add to Wine - belongs_to :artist

rails g controller Wines new create index show edit update destroy

follow above steps for Cheese for Wine

create the rest of the html files to make website work
