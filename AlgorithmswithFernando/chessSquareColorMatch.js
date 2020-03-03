function chessBoardCellColor(cell1, cell2) {
    //coding and coding..
    let dark = ["A1", "A3", "A5", "A7", "B2", "B4", "B6", "B8",
                "C1", "C3", "C5", "C7", "D2", "D4", "D6", "D8",
                "E1", "E3", "E5", "E7", "F2", "F4", "F6", "F8",
                "G1", "G3", "G5", "G7", "H2", "H4", "H6", "H8"]
    
    if(dark.includes(cell1) && !dark.includes(cell2)){
        return false
    }else{
        return true
    }

  }

console.log(chessBoardCellColor("A1","C3"))   //true
console.log(chessBoardCellColor("A1","H3"))   //false
console.log(chessBoardCellColor("A1","A2"))   //false
console.log(chessBoardCellColor("E2","G3"))   //false