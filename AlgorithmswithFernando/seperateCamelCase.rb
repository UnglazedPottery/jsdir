def solutionJade(string)
  splitArray = string.split("")
  num = 0
  
  for num in splitArray
    if splitArray[num] === ('A'..'Z') 
      splitArray.insert(num, " ")
    end
    num+=1
  end
 p splitArray
  return splitArray.join
  
end

def solutionFernando(string)
  
  capital_ltters = string.split('').select { |l| l.match(/[A-Z]/) }
  string_without_uppercase = string.split(/[A-Z]/)
  
end
  
# get all the capiatal letter inside of an array 
# split the string based on the uppercases
# iterate and append the uppercase
# 


p "Jade"
p solutionJade('camelCasing') # => 'camel Casing')
p solutionJade('camelCasingTest') # => 'camel Casing Test')
p "Jade"

p solutionFernando('camelCasing') # => 'camel Casing')
p solutionFernando('camelCasingTest') # => 'camel Casing Test')