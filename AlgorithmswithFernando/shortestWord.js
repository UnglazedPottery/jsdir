// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShortJade(s){
  let wordArray = s.split(" ");
  let lengthArray = [];
  
  for( let i = 0; i < wordArray.length; i++ ){
    lengthArray.push(wordArray[i].length)
  }
  
  let shortest = Math.min(...lengthArray)
  console.log(shortest)
  return shortest
}

findShortJade("bitcoin take over the world maybe who knows perhaps") // 3
findShortJade("turns out random test cases are easier than writing out basic ones") // 3

//Fernando's

function findShortJade(s){
  let wordArray = s.split(" ");
  let lengthArray = [];
  for( let i = 0; i < wordArray.length; i++ ){
    lengthArray.push(wordArray[i].length)
  }
  let shortest = Math.min(...lengthArray)
  console.log(shortest)
  return shortest
}
findShortJade("bitcoin take over the world maybe who knows perhaps") // 3
findShortJade("turns out random test cases are easier than writing out basic ones") // 3