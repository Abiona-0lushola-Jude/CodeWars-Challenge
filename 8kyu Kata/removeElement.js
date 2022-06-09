// QUESTION

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// SOLUTION

function removeEveryOther(arr){
    //your code here
    let pop = []
    arr.forEach((x,y)=>{
      if(y%2 === 0){
        pop.push(x)
      }
    })
    return pop
  }