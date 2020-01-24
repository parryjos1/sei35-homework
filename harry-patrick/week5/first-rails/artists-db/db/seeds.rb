# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Band.destroy_all
Band.create name: "King Gizzard and the Lizzard Wizzard", genre: "Rock, Blues", image: "https://scitechdaily.com/images/earth-losing-mass.jpg"

Band.create name: "BB King", genre: "Blues", image: "https://scitechdaily.com/images/earth-losing-mass.jpg"

Band.create name: "Rakim", genre: "Hip Hop", image: "https://scitechdaily.com/images/earth-losing-mass.jpg"
