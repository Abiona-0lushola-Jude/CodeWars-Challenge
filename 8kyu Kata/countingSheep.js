
// QUESTION

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]


// SOLUTION
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let pop =[]
    arrayOfSheep.forEach((x,i)=>{
        if(x === true){
            pop.push(x)
        }
    })
    return pop.length
  }