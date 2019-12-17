def lines
  {
      :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
      :L => ["8th", "6th", "Union Square", "3rd", "1st"],
      :SIX => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
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
  puts "You need to embark on line #{plan[0][:line]} and travel from #{plan[0][:stops].first} through to #{plan[0][:stops].last}"
  if plan.length > 1
      puts "Change at #{plan[1][:stops].shift} to line #{plan[1][:line]}"
      puts "Then continue to travel to #{plan[1][:stops].last}"
  end
  total_stops = plan[0][:stops].length + (plan[1] || {:stops => []})[:stops].length
  puts "Total number of stops is #{total_stops}"
end

plan = plan_trip :L, "3rd", :L, "8th"
explain_trip(plan)

plan = plan_trip :L, "8th", :L, "3rd"
explain_trip(plan)

plan = plan_trip :L, "8th", :SIX, "33rd"
explain_trip(plan)


