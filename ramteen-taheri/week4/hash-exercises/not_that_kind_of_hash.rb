a = ["Anil", "Erik", "Jonathan"]

# 1. How would you return the string "Erik"?

puts a[1]
puts " "

# 1. How would you add your name to the array?
a.push("Ram")
puts a
puts " "

# given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
puts h[1]
puts " "

# how would you return the string "Two"?
puts h[:two]
puts " "

puts h["two"]
puts " "

# how would you add {3 => "three"} to the hash?
h[3] = "three"
puts h
puts " "

# how would you add {:four => 4} to the hash?
h[:four] = 4
puts h
puts " "

# given the following data structure
is = {true => "It's true!", false => "It's false"}

# What is the return value of `is[2 + 2 == 4]`?
puts is[2+2 == 4] # It's true!
puts " "

# What is the return value of `is["Erik" == "Jonathan"]`?
puts is["Erik" == "Jonathan"] # It's false
puts " "

# What is the return value of `is[9 > 10]`?
puts is[9 > 10] # It's false
puts " "

# What is the return value of `is[0]`?
puts is[0] # No value
puts " "

# What is the return value of `is[9 > 10]`?
puts is["Erik"] # No Value
puts " "

# given the following data structure
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
puts users["Jonathan"][:twitter]
puts " "

# How would you add the number `7` to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
puts users["Erik"][:favorite_numbers]
puts " "

# How would you add yourself to the users hash?
users["Ram"] = {}
users["Ram"][:twitter] = "donthaveone"
users["Ram"][:favorite_numbers] = [10, 7, 13, 3]
puts users
puts " "

# how would you return the array of erik's favorite numbers?
puts users["Erik"][:favorite_numbers]
puts " "

# how would you return the smallest of erik's favorite numbers?
erik_numbers = users["Erik"][:favorite_numbers]
erik_numbers = erik_numbers.sort
puts erik_numbers[0]
puts " "

# How would you return an array of Anil's favorite numbers that are also even?
anil_numbers = users["Anil"][:favorite_numbers]
anil_even = []
anil_numbers.map do |a|
    if a % 2 == 0
        anil_even.push(a)
    end
end
puts anil_even
puts " "

# How would you return an array with the favorite numbers common to all users?
array_one = users["Jonathan"][:favorite_numbers]
array_two = users["Erik"][:favorite_numbers]
array_three = users["Anil"][:favorite_numbers]
result = array_one & array_two & array_three
puts result
puts " "

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
array_one = users["Jonathan"][:favorite_numbers]
array_two = users["Erik"][:favorite_numbers]
array_three = users["Anil"][:favorite_numbers]
result = array_one | array_two | array_three
result = result.sort
puts result
