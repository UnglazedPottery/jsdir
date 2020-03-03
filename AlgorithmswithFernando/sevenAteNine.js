//put all the sevens after the last 9, if not return the same array

function hungrySeven(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let nineIndex = 0
        if(arr[i] == 7 && arr[i + 1] == 8 && arr[i + 2] == 9) {
            let sevens = []
            let removed = arr.splice(i, 1)

            nineIndex = i + 1 

            sevens.push(removed[0])     //get all the sequential 7s before a 789 sequence
            for(let x = i-1; x >= 0; x--){
                //if not equal to 7, then break
                if(arr[x] != 7){
                    break              
                }
                let removed = arr.splice(x, 1)
                nineIndex -= 1       
                sevens.push(removed[0])                  
            }
            arr.splice((nineIndex + 1), 0, ...sevens)
            console.log(arr)
        }
    }

    console.log(arr)

}

//hungrySeven([7,8,9]) //=> [8,9,7]
//hungrySeven([7,7,7,8,9]) //=> [8,9,7,7,7]
hungrySeven([8,7,8,9,8,9,7,8]) //=> [8,8,9,8,9,7,7,8]  wth is with this test    8 8 9 7 8 9 7 8  
//hungrySeven([8,7,8,7,9,8]) //=> [8,7,8,7,9,8]
//hungrySeven([7, 8, 7, 7, 8, 9, 7, 8, 8, 9, 8, 8, 9, 8, 8, 9, 7, 8, 9, 9]) 
            //=> [7, 8, 8, 9, 7, 7, 7, 8, 8, 9, 8, 8, 9, 8, 8, 9, 8, 9, 7, 9]

