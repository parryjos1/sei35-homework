print "What suburb do you live in? "
suburb = gets.chomp
suburb = suburb.downcase

if suburb == "campbelltown"
    puts "You should consider moving"
elsif suburb == "bondi junction"
    puts "Nice area if you can afford it"
elsif suburb == "wollongong"
    puts "No jobs here"
end