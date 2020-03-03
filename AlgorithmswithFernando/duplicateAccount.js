function uniq(a){
    a.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })
}

function duplicateCountJade(text){
  let array = text.toLowerCase().split('').sort()
  let repeatsArray = []
  
  // console.log("jade ", array)
  for(let i = 0; i< array.length; i++){
    if(array[i+1] == array[i]){
      repeatsArray.push(array[i])
    }
  }
  

  let uniqCount = repeatsArray.filter( onlyUnique ).length;
  console.log("jade ",uniqCount)
 
}

function duplicateCountFernando(text){
  let lowerCase = text.toLowerCase().split('').sort().join('').match(/([a-z])\1+/g )
  if(lowerCase == null){
     return console.log(0)
     }else{
     return console.log(lowerCase.length)
     }
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// string to lower case
// match all the repetive terms
// put them on an array 
// get the unique ones
// count them


duplicateCountJade("") // 0 
duplicateCountJade("abcde") // 0
duplicateCountJade("aabbcde") // 2
duplicateCountJade("aabBcde") // 2,"should ignore case"
duplicateCountJade("Indivisibility") // 1
duplicateCountJade("Indivisibilities") // 2, "characters may not be adjacent"

duplicateCountFernando("") // 0 
duplicateCountFernando("abcde") // 0
duplicateCountFernando("aabbcde") // 2
duplicateCountFernando("aabBcde") // 2,"should ignore case"
duplicateCountFernando("Indivisibility") // 1
duplicateCountFernando("Indivisibilities") // 2, "characters may not be adjacent"