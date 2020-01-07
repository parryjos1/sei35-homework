require 'colorize'

def get_lines
  lines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
end

def drive(line, station_start, station_end, has_intersection=true)
  lines = get_lines
  l = lines[line]
  message_stops = ''
  start_index = l.index(station_start)
  end_index = l.index(station_end)
  counter = 0
  if start_index < end_index
    l[start_index + 1..end_index].each do |station|
      counter += 1
      message_stops += "#{station}."
    end
  else
    l[end_index.. start_index - 1].reverse.each do |station|
      counter += 1
      message_stops += "#{station}."
    end
  end

  message1, message2, message3 = counter > 1 ? ["Your next stops are ", 'are', 's'] : ['Your next stop is ', 'is', '']
  message1.sub! 'next', 'additional' unless has_intersection
  message1 += message_stops.split('.').join(", ").colorize(:color => :black, :background => :white) + ". There #{message2} #{counter} stop#{message3} on line #{line}."
  return message1, counter
end

def plan_trip(line_start, first_station, line_end, last_station)
  if line_start != line_end  # unless not possible with elsif statements
    m1, c1 = drive(line_start, first_station, 'Union Square')
    m2, c2 = drive(line_end, 'Union Square', last_station, false)
    puts "#{m1}\n#{m2}\nTotal amount of stops: #{c1 + c2}."
  elsif first_station != last_station
    m, c = drive(line_start, first_station, last_station)
    puts m
  else
    puts "Something went wrong!"
  end
end

plan_trip( :N, "Times Square", :L, "1st" )
plan_trip( 6, "Grand Central", :L, "8th" )
plan_trip(:L, "8th", 6, "Grand Central")
plan_trip( :L, "3rd", :L, "6th" )
