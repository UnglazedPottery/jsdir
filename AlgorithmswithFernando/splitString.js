/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an 
 odd number of characters then it should replace the missing second character of the final pair with an 
 underscore ('_') */

 function splitString(s){
    let finalArr = []
      if(s.length % 2 == 1){
        s = s.concat("_")
        //console.log(s)
      }
      for(let i = 0; i < s.length; i+=2){
          finalArr.push(s[i].concat(s[i+1]))
          //console.log(s[i].concat(s[i+1]))
      }
      
    console.log(finalArr)
  }
  
  splitString('abc') // should return ['ab', 'c_']
  splitString('abcdef') // should return ['ab', 'cd', 'ef']