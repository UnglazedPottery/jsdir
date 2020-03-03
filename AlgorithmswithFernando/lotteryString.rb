# given a string, take out the letters if any and return only unique numbers, if no numbers then return "One more run!"

def lottery(str)
    answer = str.gsub(/\D/, '').split('').uniq.join     #use regular expressions!
  
    return "One more run!" if answer == '' 
    answer
  
end

def lottery2(str)
    answer = str.gsub(/\D/, '').squeeze
    
    return "One more run!" if answer == ''
    answer
end

# Jade 

# Maxito

# Fernando

p lottery("hPrBKWDH8yc6Lt5NQZWQ")  #-->  "865"
p lottery("ynMAisVpHEqpqHBqTrwH")  #-->  "One more run!"
p lottery("555")                   # -->  "5"