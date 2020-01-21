# Remove any existing rows from this table before adding seed data
Island.destroy_all


Island.create(
    name: 'Maldives',
    image: 'https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg',
    area: 298,
    population: 395_000,
    description: "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean. Beneath the mesmerizing waters, coral reefs flourish, luring divers and snorkelers from around the world."
)

Island.create(
    name: 'Bora Bora, French Polynesia',
    image: 'https://www.planetware.com/photos-large/SEY/best-islands-bora-bora.jpg',
    area: 30.55,
    population: 10_605,
    description: "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters, and tiny islets or motus dot the lagoon. The island, of course, is distinctly French, with mouthwatering cuisine to match. Diving and snorkeling are excellent in the surrounding reefs and hiking trails weave through the palm-studded forests."
)

Island.create(
    name: 'Palawan, Philippines',
    image: 'https://www.planetware.com/photos-large/SEY/best-islands-palawan.jpg',
    area: 12_189,
    population: 886_000,
    description: "Palawan is the Philippine's answer to paradise. This island province stretches southwest to Borneo with lush limestone peaks rising from a jewel-like sea so clear, that you can almost see the expressions on the fish from above the surface. Slivers of gleaming white sand fringed with rustling palms rim many of these jungle-clad islands, while under the water, coral reefs flourish with an impressive diversity of tropical fish, offering some of the best diving in the world."
)

Island.create(
    name: 'Santorini, Greece',
    image: 'https://www.planetware.com/photos-large/SEY/best-islands-santorini.jpg',
    area: 76.19,
    population: 10_500,
    description: "Encircling a sea-filled caldera, spectacular Santorini scores top points for dramatic beauty. Bleached white villas tumble down volcanic cliffs. Blue-domed churches rise against the sparkling sea, and bright sprays of bougainvillea add to the eye-popping canvas of color. Perched atop the black lava cliffs, the settlements of Firá and Oia are the island's most picturesque, and pricey, destinations, and Oia ranks among the most photographed locations in the world."
)

Island.create(
    name: 'Kauai, Hawaii',
    image: 'https://www.planetware.com/photos-large/SEY/best-islands-kauai.jpg',
    area: 1430,
    population: 72_000,
    description: "Kauaʻi is called 'the Garden Isle' for good reason: Rainforests cloak much of the interior. Waterfalls tumble from lava cliffs, and the intoxicating fragrance of tropical blooms hangs heavy on the sultry air. But the island's beauty lies not just in its luxuriant flora and abundant rain; its spectacular coastline will take your breath away. Lava sculpted this stunning island, thrusting up from the ocean floor to form velvety ridges and vertiginous cliffs rimmed by gorgeous beaches. Beneath its cobalt-blue seas, turtles and tropical fish swim along coral reefs, delighting divers and snorkelers from around the globe."
)


print "Done! Created #{Island.count} islands: "
puts Island.pluck(:name).join(', ')