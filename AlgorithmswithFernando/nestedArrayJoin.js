//You are given two nested arrays like so. You need to check the first element in arrA at index zero and 
// compare it with all the elements at index zero in arrB. If they match, join them and put these in new array

let arrA = [[1, 10], [2, 20], [3, 30], [4, 34], [5, 32]]
let arrB = [[1, 100], [2, 200], [4, 400], [3, 75], [6, 21]]
let arrC = []

function innerJoin(arrA, arrB){
    for(let i = 0; i < arrA.length; i++){
        for(let x = 0; x < arrB.length; x++){
            if( arrA[i][0] == arrB[x][0]){
                let match = arrA[i].concat(arrB[x])
                arrC.push(match)
                // console.log(arrC)
            }
        //   console.log("next", i, x)
        }
    }
    return arrC
}


innerJoin(arrA, arrB) // => [[1, 10, 1, 100], [2, 20, 2, 200], [3, 30, 3, 75], [4, 34, 4, 400]]