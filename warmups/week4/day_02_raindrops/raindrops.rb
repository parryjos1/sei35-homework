# # Version 1

# def raindrops number

#   string = ""

#   if number % 3 == 0
#     string += "Pling"
#   end

#   if number % 5 == 0
#     string += "Plang"
#   end

#   if number % 7 == 0
#     string += "Plong"
#   end

#   if string.length == 0
#     string = number.to_s
#   end

#   puts "The raindrops speak for #{number} is #{string}"

# end

# raindrops 28
# raindrops 1755
# raindrops 34

# Version 2
def raindrops number

    string = ""
  
    string += "Pling" if number % 3 == 0
    string += "Plang" if number % 5 == 0
    string += "Plong" if number % 7 == 0    

    string.empty? ? number.to_s : string
  
  
  end
  
  puts "input 28: #{raindrops 28}"
  puts "input 1755: #{raindrops 1755}"
  puts "input 105: #{raindrops 105}"
  puts "input 34: #{raindrops 34}"