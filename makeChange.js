/* Complete the method that will determine the minimum number of coins needed to make change for a given amount.
    Coins used will be half-dollars, quarters, dimes, nickels, and pennies which will be represented by the 
    symbols H, Q, D, N and P. 
    The argument passed in will be an integer representing the value in cents. The return value should be a 
    hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not 
    used should not be included in the hash. If the argument passed in is 0, then the method should return an 
    empty hash.
*/

function make_change(centVal){

    let coinHash = {}
    let remaining = centVal

    if((remaining - 50) >= 0 ){
        coinHash["H"] = parseInt(remaining/50) 
        remaining = remaining - parseInt(remaining/50)*50
    }
    if((remaining - 25) >= 0 ){
        coinHash["Q"] = parseInt(remaining/25) 
        remaining = remaining - parseInt(remaining/25)*25
    }
    if((remaining - 10) >= 0 ){
        coinHash["D"] = parseInt(remaining/10) 
        remaining = remaining - parseInt(remaining/10)*10
    }
    if((remaining - 5) >= 0 ){
        coinHash["N"] = parseInt(remaining/5) 
        remaining = remaining - parseInt(remaining/5)*5
    }
    if(remaining > 0 ){
        coinHash["P"] = remaining
        remaining = 0
    }
    console.log(coinHash)

}

make_change(0)  // -->  {}
make_change(1)  // -->  {:P=>1}
make_change(43) // -->  {:Q=>1, :D=>1, :N=>1, :P=>3}
make_change(91) // -->  {:H=>1, :Q=>1, :D=>1, :N=>1, :P=>1}