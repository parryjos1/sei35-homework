Sign.destroy_all

puts 'hello sign'

Sign.create name: 'Cancer', luckynumber: 3

Sign.create name: 'Leo', luckynumber: 8

Sign.create name: 'Libra', luckynumber: 2

puts "Done done doneee #{Sign.count} signs"
puts Sign.pluck(:name).join(', ')
