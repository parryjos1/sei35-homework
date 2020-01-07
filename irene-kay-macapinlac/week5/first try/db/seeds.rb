# Remove any existing rows from this table before adding to it;
# this ensures that the table will always be in exactly the same
# state after running the seed command; keeps things predictable!
Sign.destroy_all

puts "Know whats happening in the sky..."

Sign.create name: 'Aries', date: 'MAR 21 - APR 19', house: 1, info: 'The first sign of the Zodiac, Aries are the t'

Sign.create name: 'Taurus', date: 'APR 20 - MAY 20', house: 2, info: 'Smart, ambitious, and'

Sign.create name: 'Gemini', date: 'MAY 21 - JUN 20', house: 3, info: 'Smart, passionate, and dynamic,'

Sign.create name: 'Cancer', date: 'JUN 21 - JUL 22', house: 4, info: 'Emotional, intuitive, and p.'

Sign.create name: 'Leo', date: 'JUL 23 - AUG 22', house: 5, info: 'Bold, intelligent, warm, and courageous, fire sign L'

puts "Done! Create #{Sign.count} signs:"
puts Sign.pluck(:name).join(', ')
