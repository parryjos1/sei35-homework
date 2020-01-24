puts "Create a mountain table!"
Mountain.create name: 'Mount Everst', height: 8848, range: 'Mahalangur Himalaya', parent_mountain: 'None', first_ascended: 1953, country: 'Nepal & China', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/400px-Everest_kalapatthar.jpg'

Mountain.create name: 'K2', height: 8611, range: 'Baltoro Karakoram', parent_mountain: 'Mount Everst', first_ascended: 1955, country: 'Pakistan & China', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/270px-K2_2006b.jpg'

Mountain.create name: 'Kangchenjunga', height: 8586, range: 'Kangchenjunga Himalaya', parent_mountain: 'Mount Everst', first_ascended: 1955, country: 'Nepal & China', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kanchenjunga_from_Tiger_Hills.JPG/270px-Kanchenjunga_from_Tiger_Hills.JPG'
puts "Done!"
