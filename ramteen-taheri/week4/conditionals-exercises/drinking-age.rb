print "Enter your drinking age: "

# no need for this
# age = gets.chomp
age = gets

age = age.to_i

if age >= 18
    puts "drink away and get smashed!"
elsif age < 18
    puts "Too young get outta here..."
end


