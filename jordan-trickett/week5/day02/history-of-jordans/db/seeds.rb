Jordan.destroy_all

puts "Creating"

Jordan.create name: 'Jordan 1', year: 1985, designer: 'Peter Moore', price: 65.00, image: 'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj1Retro1.jpg'

Jordan.create name: 'Jordan 2', year: 1986, designer: 'Bruce Kilgore', price: 100.00, image: 'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj2Retro2.jpg'

Jordan.create name: 'Jordan 3', year: 1988, designer: 'Tinker Hatfield', price: 100.00, image: 'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj3Retro3.jpg'

puts "Done #{Jordan.count}"
