
# loop do


def amount
  print "what amount do you want to borrow: "
  gets.to_i
end

def term_length
  print "how many years: "
  gets.to_i
end

def interest_rate
  print "what is your interest percent rate: "
  gets.to_f
end

def mortgage_calc(p, r, n)
  puts p
  puts r
  puts n
  m = p * ( (r * ( ( 1 + r ) ** n ) ) / ((( 1 + r) ** (n * 1)) -1) )
  puts m
end

mortgage_calc(amount, ((interest_rate/100) / 12), (term_length * 12))
