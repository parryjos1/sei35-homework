def lines
  {
      :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
      :L => ["8th", "6th", "Union Square", "3rd", "1st"],
      :SIX => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

def show_menu (list, prompt="", prefix="", suffix="")
  choice = ""
  loop do
    puts prompt
    list.each_with_index do |value, index|
      if value == :SIX
        value = "6"
      end
      puts "\t#{index}: #{prefix} #{value} #{suffix}"
    end
    puts "\tq: quit"
    choice = gets.chomp
    if choice != 'q' && !((0...list.length).include? choice.to_i)
      puts "Invalid choice."
    else
      break
    end
  end
  choice
end

def plan_single_line_trip (line, b_stop, a_stop)
  b_index = lines[line].find_index b_stop
  a_index = lines[line].find_index a_stop

  if b_index > a_index
    b_index.downto(a_index).map { |i| lines[line][i] }
  else
    b_index.upto(a_index).map { |i| lines[line][i] }
  end
end

def plan_trip (b_line, b_stop, a_line, a_stop)
  if b_line != a_line
    journey_1 = plan_single_line_trip b_line, b_stop, "Union Square"
    journey_2 = plan_single_line_trip a_line, "Union Square", a_stop
    [{:line => b_line, :stops => journey_1}, {:line => a_line, :stops => journey_2}]
  else
    journey = plan_single_line_trip b_line, b_stop, a_stop
    [{:line => b_line, :stops => journey}]
  end
end

def explain_trip(plan)
  length = plan[0][:stops].length
  puts "\nYou board the train at #{plan[0][:stops].first} on line #{plan[0][:line]} and travel through these stops: #{plan[0][:stops][1...length].join(', ')}"
  if plan.length > 1
    puts "Change at #{plan[1][:stops].shift} to line #{plan[1][:line]}"
    puts "Then continue to travel on #{plan[1][:line]} through these stops: #{plan[1][:stops].join(', ')}"
  end
  total_stops = length + (plan[1] || {:stops => []})[:stops].length
  puts "Total number of stops is #{total_stops}"
end

def quit(choice)
  if choice == 'q'
    puts "Bye!"
    true
  else
    false
  end
end

choice = show_menu(lines.keys, "Please choose the boarding line:", "line")
exit 0 if quit(choice)
boarding_line = lines.keys[choice.to_i]

choice = show_menu(lines[boarding_line], "Please choose the boarding station:", "", "station")
exit 0 if quit(choice)
boarding_stop = lines[boarding_line][choice.to_i]

choice = show_menu(lines.keys, "Please choose the boarding line:", "line")
exit 0 if quit(choice)
alighting_line = lines.keys[choice.to_i]

choice = show_menu(lines[alighting_line], "Please choose the alighting station:", "", "station")
exit 0 if quit(choice)
alighting_stop = lines[alighting_line][choice.to_i]

plan = plan_trip boarding_line, boarding_stop, alighting_line, alighting_stop
explain_trip(plan)

#plan = plan_trip :L, "3rd", :L, "8th"
#explain_trip(plan)
#
#plan = plan_trip :L, "8th", :L, "3rd"
#explain_trip(plan)
#
#plan = plan_trip :L, "8th", :SIX, "33rd"
#explain_trip(plan)