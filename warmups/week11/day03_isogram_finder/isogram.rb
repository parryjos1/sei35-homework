def isogram word
  word.length == word.downcase.split('').uniq.length
end

p isogram 'Dermatoglyphics'  #true
p isogram 'isogram'   #true
p isogram 'aba'    #false
p isogram 'moOse'    #false
p isogram 'isIsogram'    #false
p isogram ''     #true
