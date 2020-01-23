Mountain.destroy_all

Mountain.create name: "Killimanjaro", image: "http://www.google.com", height: 8971, description: "a very tall mountain"

Mountain.create name: "Fuji", image: "https://www.thephotoargus.com/wp-content/uploads/2016/02/Mount-Fuji-01.jpg", height: 9854, description: "cold mountain"

Mountain.create name: "Himalayas", image: "https://www.thephotoargus.com/wp-content/uploads/2016/02/Mount-Everest-01.jpg", height: 12342, description: "a very tall mountain"

Mountain.create name: "Kirkjufell", image: "https://www.thephotoargus.com/wp-content/uploads/2016/06/Kirkjufell-1.jpg", height: 9887, description: "a beautiful mountain"

puts "Done! Create #{ Mountain.count } mountains"
puts Mountain.pluck( :name ).join(', ')
