Monkey.destroy_all

Monkey.create name: 'Big', native_country: 'China', weight: 20, height: 25, lifespan: 4, image: 'http://www.xinhuanet.com/english/2019-05/01/138026070_15566670877671n.jpg'

Monkey.create name: 'Small', native_country: 'Japan', weight: 10, height: 10, lifespan: 11, image: 'https://cdn.martinbaileyphotography.com/wp-content/uploads/2018/02/MBP_Snow_Monkeys_20180130_5D19228.jpg'

Monkey.create name: 'Yellow', native_country: 'Russia', weight: 30, height: 20, lifespan: 7, image: 'https://www.insidescience.org/sites/default/files/Golden-headed-lion-tamarin_topNteaser.jpg'

Monkey.create name: 'Red', native_country: 'India', weight: 15, height: 30, lifespan: 4, image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/326/326712/capuchin-monkey.jpg'

puts "Done! You've created #{Monkey.count} monkeys."
puts Monkey.pluck( :name ).join(', ')
