def train_lines
  {
    n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    l: ["8th", "6th", "Union Square", "3rd", "1st"],
    six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

def single_line_trip( line, start_station, end_station )
  # p line, start_station, end_station
  p train_lines[ line ]
  p start_station = train_lines[line].index(start_station)
  p end_station = train_lines[line].index(end_station)

  if start_station < end_station
    # puts "working"
    p single_trip = train_lines[line].slice(start_station + 1..end_station)
    p "#{single_trip.count()} stops"
 else start_station > end_station
   # puts "working"
     p single_trip = train_lines[line].slice(end_station..start_station - 1).reverse
     p "#{single_trip.count()} stops"
 end

end

# single_line_trip :n, '34th', '8th'

def multi_line_trip( line, start_station, line2, end_station )
  # p line, start_station, line2, end_station
  train_lines[ line ]
  train_lines[ line2 ]
  change_usq_line = train_lines[ line ].index("Union Square")
  change_usq_line2 = train_lines[ line2 ].index("Union Square")
  start_station = train_lines[line].index(start_station)
  end_station = train_lines[line2].index(end_station)

  unless line == line2
    # puts "work"
    p interchange = train_lines[line].slice(start_station + 1..change_usq_line)
    p "#{interchange.count()} stops till next station"
    puts "Change at Union Square to get to train line: #{line2}"
    p last_trip = train_lines[line2].slice(change_usq_line2 - 1..end_station)
    p "#{last_trip.count()} stops till your destination"
   end

 end




  multi_line_trip :n, '34th', :l, '1st'
