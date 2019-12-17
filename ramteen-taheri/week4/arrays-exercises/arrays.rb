# # array - first block commented out
# days_of_week = [   
#             'Monday', 
#             'Tuesday', 
#             'Wednesday', 
#             'Thursday', 
#             'Friday', 
#             ]


# # get the last element
# front = days_of_week.pop

# # add the element to the start of the array
# days_of_week.unshift(front)

# #output
# puts days_of_week


#new arrays
weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
]
weekends = [
    'Saturday',
    'Sunday'
]
new_days_of_week = [
    weekdays,
    weekends
]


#remove weekends because we love weekdays...
new_days_of_week = new_days_of_week.shift

#sort array alphabetically
new_days_of_week = new_days_of_week.sort { |a, b| a <=> b } 

#print array
puts new_days_of_week