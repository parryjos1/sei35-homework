
Mountain.destroy_all

  puts "Welcome"

  Mountain.create mountain: 'abdef', range: 'bcdefg' , image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', height: 1, type: 'cdefgh', location: 'defghi'

  # Mountain.create mountain: 'efghij', range: 'fghijk' , image: 'https://images.pexels.com/photos/361104/pexels-photo-361104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', height: 2, type: 'ghijkl', location: 'hijklm'
  #
  # Mountain.create mountain: 'ijklmn', range: 'jklmno' , image: 'https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', height: 3, type: 'klmnop', location: 'lmnopq'
  #
  # Mountain.create mountain: 'mnopqr', range: 'nopqrs' , image: 'https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', height: 4, type: 'opqrst', location: 'pqrstu'



  puts "Done! Created #{ Mountain.count } mountains:"
  puts Mountain.pluck( :name ).join(', ')
