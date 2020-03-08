# Open each file which is an argument to the command that runs this Ruby file,
# read in each line of each file in order, and loop over them, giving
# you one line at a time in the 'line' block variable

# Make a program that prints each line of its input that mentions fred. (It shouldn’t do anything for other lines of input.) Does it match if your input string is Fred, frederick, or Alfred? Make a small text file with a few lines mentioning "fred flintstone" and his friends, then use that file as input to this program and the ones later in this section.
# ARGF.each do |line|
#   # puts line
#   puts line if line =~ /fred/
# end



# Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)
# ARGF.each do |line|
#   # puts line
#   puts line if line =~ /[Ff]red/
#   # puts line if line =puts line if line =~ /Fred|fred/
# end


# Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?
# ARGF.each do |line|
#   # puts line
#   puts line if line =~ /\./
# end


# Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?
# ARGF.each do |line|
#   # puts line
#   puts line if line =~ /[A-Z][a-z]/
# end


# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.
# ARGF.each do |line|
#   # puts line
#   puts line if line =~ /(\S)\1/
# end


# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.
# ARGF.each do |line|
#   # puts line
#   puts line if line =~ /wilma.*fred|fred.*wilma/
#   # puts line if line.include?('wilma') && line.include?('fred')
# end


# Using the pattern test program, make a pattern to match the string match. Try the program with the input string beforematchafter. Does the output show the three parts of the match in the right order?
# ARGF.each do |line|
#   if line =~ /match/
#     match = line.match(/(?<m>match)/)
#     puts match[:m]
#     puts match.pre_match
#     puts match.post_match
#   end
# end


# Using the pattern test program, make a pattern that matches if any word (in the \w sense of word) ends with the letter a. Does it match wilma but not barney? Does it match Mrs. Wilma Flintstone? What about wilma&fred? Try it on the sample text file from the last exercises (and add these test strings if they weren’t already in there).
# ARGF.each do |line|
#   puts line if line =~ /\w+a\s/
# end


# Modify the program from the previous exercise so that the word ending with the letter a is captured into $1. Update the code to display that variable’s contents in single quotes, something like $1 contains 'Wilma'.
# ARGF.each do |line|
#   puts "$1 contains #{$1}" if line =~ /(\w+a\s)/
# end


# Modify the program from the previous exercise to use named captures instead of relying on $1. Update the code to display that label name, something like 'word' contains 'Wilma'.
# ARGF.each do |line|
#   match = line.match(/(?<name>\w+a\s)/)
#   if match
#     puts "name contains #{match[:name]}"
#   end
# end


# Extra credit exercise: modify the program from the previous exercise so that immediately following the word ending in a it will also capture up-to-five characters (if there are that many characters, of course) in a separate capture variable. Update the code to display both capture variables. For example, if the input string says I saw Wilma yesterday, the up-to-five characters are "yest". If the input is I, Wilma!, the extra capture should have just one character. Does your pattern still match just plain wilma?
# ARGF.each do |line|
#   match = line.match(/
#     (?<name>\w+a)  #test
#     [\ |\W] #test
#     /x)
#     #not working
#   puts line.index(match)
#
# end


# Write a new program (not the test program!) that prints out any input line ending with whitespace (other than just a newline). Put a marker character at the end of the output line so as to make the whitespace visible.
ARGF.each do |line|
  puts line.gsub(/\n$/, "!")
end
