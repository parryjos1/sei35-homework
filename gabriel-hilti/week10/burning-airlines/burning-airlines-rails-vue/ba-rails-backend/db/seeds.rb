# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
print "Createing users..."
u1 = User.create! name: 'Test user 1', email: 'one@one.com', password: 'chicken'
u2 = User.create! name: 'Test user 2', email: 'two@one.com', password: 'chicken'
u3 = User.create! name: 'Test user 3', email: 'three@one.com', password: 'chicken'
puts "Created #{User.all.length} users."

Airplane.destroy_all
print "Creating Airplanes..."
p1 = Airplane.create! name: '737', rows: 40, cols: 6
p2 = Airplane.create! name: '737 MAX', rows: 60, cols: 8
puts "Created #{Airplane.all.length} planes."

Flight.destroy_all
print "Creating Flights..."
# more abstract version with whole object, internal automatically taking the ID
# airplane: p1
f1 = Flight.create! flight_number: 'BA256', departure_date: '2020-03-01 4:20', origin: 'SYD', destination: 'SIN', airplane_id: p1.id
f2 = Flight.create! flight_number: 'BA512', departure_date: '2020-04-01 11:20', origin: 'SYD', destination: 'SIN', airplane_id: p1.id
f3 = Flight.create! flight_number: 'BA1024', departure_date: '2020-05-23 14:20', origin: 'SYD', destination: 'MEL', airplane_id: p2.id  # airplane: p2
puts "Created #{Flight.all.length} flights..."

Reservation.destroy_all
print "Creating reservations..."
r1 = Reservation.create! flight: f1, user: u1, row: 10, col: 2   # flight_id: f1.id, user_id: u1.id
r2 = Reservation.create! flight: f1, user: u2, row: 10, col: 3
r3 = Reservation.create! flight: f1, user: u3, row: 10, col: 4
r4 = Reservation.create! flight: f2, user: u3, row: 15, col: 1
puts "Created #{Reservation.all.length} reservations."

puts "Associations:"
puts "Airplane #1 has #{Airplane.first.flights.length} flights (should be 2)"
puts "Flight #1 has #{Flight.first.reservations.length} flights (should be 3)"
puts "User #3 has #{User.third.reservations.length} reservations (should be 2)"
puts "Done."
