Artist.destroy_all

puts "Creating"

  a1 = Artist.create! name: 'Lee Krasner', nationality: 'USA', dob: '1908/10/27', period: '20th Century', image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg', roundness: 5, bio: 'Abstract Expressionist'

  a2 = Artist.create! name: 'Frantisek Kupka', nationality: 'Czech', dob: '1871/09/23', period: '20th Century', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Frantisek_Kupka_1928.jpg', roundness: 3, bio: 'Vorticist/Abstract'

  a3 = Artist.create! name: 'Max Ernst', nationality: 'German', dob: '1891/04/02', period: '20th Century', image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg', roundness: 7, bio: 'Surrealist'

puts "Created #{Artist.count} artists"
puts Artist.pluck(:name).join(', ')

Work.destroy_all

puts "Creating work"

#krasner
  Work.create! title: 'Gothic Landscape', year: '1961/01/01', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tate.org.uk/art/images/work/T/T03/T03291_10.jpg', artist: a1

  Work.create! title: 'Working Model', year: '1957/01/01', medium: 'bronze sculpture', style: 'modernism', image: 'http://www.tate.org.uk/art/images/work/T/T00/T00390_10.jpg', artist: a1

#Kupka
  Work.create! title: 'Movement', year: '1946/01/01', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tresbohemes.com/wp-content/uploads/2016/04/Kupka-Movement.jpg', artist: a2

#Ernst
  Work.create! title: 'City with Animals', year: '1930/01/01', medium: 'oil on wood', style: 'surrealism/cubism', image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870', artist: a3



puts "Created #{Work.count} works"
