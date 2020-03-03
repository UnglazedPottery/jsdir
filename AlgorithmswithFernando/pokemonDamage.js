// https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/javascript

function calculateDamage(yourType, opponentType, attack, defense){
    let effectiveness = 0.0; 
    
    if(yourType == opponentType ||
       yourType == "fire" && opponentType == "water" ||
       yourType == "water" && opponentType == "grass" ||
       yourType == "electric" && opponentType == "water" || 
       yourType == "grass" && opponentType == "fire"
      ){
        effectiveness = .5 
      }else if( yourType == "fire" && opponentType == "electric" || 
               yourType == "electric" && opponentType == "fire" || 
               yourType == "grass" && opponentType == "electric" || 
               yourType == "electric" && opponentType == "grass"){
        effectiveness = 1
               }
      else{ effectiveness = 2 }
    
    let damage = 50 * (attack/defense) * effectiveness; 
    
    console.log(damage)
  }
  
  calculateDamage("fire", "water", 100, 100) // 25
  calculateDamage("grass", "water", 100, 100) // 100
  calculateDamage("electric", "fire", 100, 100) // 50
  calculateDamage("grass", "electric", 57, 19) // 150 
  calculateDamage("grass", "water", 40, 40) // 100
  calculateDamage("grass", "fire", 35, 5) // 175 
  calculateDamage("fire", "electric", 10, 2) // 250
  
  // Super effective: 2x damage
  // Neutral: 1x damage
  // Not very effective: 0.5x damage
  // --------------------------------------------------
  // fire is very effective against grass
  // fire is not very effective against water
  // fire is neutral against electric
  // water is not very effective against grass
  // water is not very effective against electric
  // grass is neutral against electric
  //----------------------------------------------------
  // damage = 50 * (attack / defense) * effectiveness