# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all
Mountain.create name:"Mount Everest", height:8848, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/270px-Everest_kalapatthar.jpg", first:"Edmund Hillary & Tenzing Norgay", date:"29 May 1953"
Mountain.create name:"K2", height:8611, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/270px-K2_2006b.jpg", first:"Achille Compagnoni & Lino Lacedelli", date:"31 July 1954"
Mountain.create name:"Kangchenjunga", height:8568, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kanchenjunga_from_Tiger_Hills.JPG/270px-Kanchenjunga_from_Tiger_Hills.JPG", first:"Joe Brown & George Band", date:"25 May 1955"
Mountain.create name:"Lhotse", height:8516, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lhotse-fromChukhungRi.jpg/270px-Lhotse-fromChukhungRi.jpg", first:"Fritz Luchsinger & Ernst Reiss", date:"18 May 1956"
