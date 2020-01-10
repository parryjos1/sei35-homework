Superhero.destroy_all

puts "Hello friend, let's add some Superheros:"

s1 = Superhero.create name: 'Superman', alterego: 'Clark Kent', home: 'Metropolis', publisher: 'DC', bio: 'placeholder', image: 'batman.jpg', power: 'Strength and Virtue'
s2 = Superhero.create name: 'Batman', alterego: 'Bruce Wayne', home: 'Gotham City', publisher: 'DC', bio: 'placeholder', image: 'superman.jpg', power: 'Money and Cunning'
s3 = Superhero.create name: 'Spider-Man', alterego: 'Peter Parker', home: 'Queens', publisher: 'Marvel', bio: 'placeholder', image: 'spiderman.jpg', power: 'Spider blessed skills'
s4 = Superhero.create name: 'Hulk', alterego: 'Bruce Banner', home: 'Various Cities', publisher: 'Marvel', bio: 'placeholder', image: 'hulk.jpg', power: 'Rage fuelled Gamma strength'

puts "Created #{ Superhero.all.length} entries:"
puts Superhero.pluck(:name).join(', ')
puts "Excelsior!"

puts "Hello friend, let's add some Villains:"

Villain.destroy_all

Villain.create name: 'Lex Luthor', alterego: 'none', home: 'Metropolis', publisher: 'DC', bio: 'placeholder', image: 'lexluthor.jpg', power: 'Intelligence and Tech', superhero: s1
Villain.create name: 'Brainiac', alterego: 'Vril Dox', home: 'Colu', publisher: 'DC', bio: 'placeholder', image: 'brainiac.jpg', power: 'Super Intelligence and Robot body', superhero: s1
Villain.create name: 'Doomsday', alterego: 'none', home: 'Krypton', publisher: 'DC', bio: 'placeholder', image: 'doomsday.jpg', power: 'Adaptive Evolution', superhero: s1
Villain.create name: 'Joker', alterego: 'unknown', home: 'Gotham', publisher: 'DC', bio: 'placeholder', image: 'joker.jpg', power: 'Insanity and clown based weapons', superhero: s2
Villain.create name: 'Poison Ivy', alterego: 'Dr Pamela Isley', home: 'Gotham', publisher: 'DC', bio: 'placeholder', image: 'poisonivy.jpg', power: 'Control over Plant-life', superhero: s2
Villain.create name: 'Clayface', alterego: 'Cassius Payne', home: 'Gotham', publisher: 'DC', bio: 'placeholder', image: 'clayface.jpg', power: 'Shapeshifter', superhero: s2
Villain.create name: 'Vulture', alterego: 'Adrian Toomes', home: '', publisher: 'Marvel', bio: 'placeholder', image: 'vulture.jpg', power: 'Cybernetic Flight Suit', superhero: s3
Villain.create name: 'Rhino', alterego: 'Aleksei Sytsevich', home: 'Russia', publisher: 'Marvel', bio: 'placeholder', image: 'rhino.jpg', power: 'Super Strength and Rhino Suit', superhero: s3
Villain.create name: 'Dr. Octopus', alterego: 'Otto Octavius', home: 'phold', publisher: 'Marvel', bio: 'placeholder', image: 'droctopus.jpg', power: 'Mind-Controlled Robotic Tentacles', superhero: s3
Villain.create name: 'Leader', alterego: 'Samuel Sterns', home: 'phold', publisher: 'Marvel', bio: 'placeholder', image: 'leader.jpg', power: 'Superior Intelligence', superhero: s4
Villain.create name: 'Absorbing Man', alterego: 'Carl Creel', home: 'phold', publisher: 'Marvel', bio: 'placeholder', image: 'absorbingman.jpg', power: 'Change phsyiology on contact', superhero: s4
Villain.create name: 'Abomination', alterego: 'Emil Blonsky', home: 'phold', publisher: 'Marvel', bio: 'placeholder', image: 'abomination.jpg', power: 'Gamma altered Strength', superhero: s4

puts "Created #{ Villain.all.length} entries:"
puts Villain.pluck(:name).join(', ')
puts "Excelsior!"
