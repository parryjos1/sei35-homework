print "Is the A/C Functional? [y/n]: "
functional = gets.chomp
functional = functional.downcase

print "What is the current temp?: "
current_temperature = gets.chomp
current_temperature = current_temperature.to_f

print "What temp do you want it at?: "
wanted_temperature = gets.chomp
wanted_temperature = wanted_temperature.to_f

if functional == 'y' && current_temperature > wanted_temperature
    puts "Turn on the AC Please..."
elsif functional == 'n' && current_temperature > wanted_temperature
    puts "Fix the damn A/C, it's hot!"
elsif functional == 'n' && current_temperature < wanted_temperature
    puts "Fix the A/C when you have the chance. It's cool."
end