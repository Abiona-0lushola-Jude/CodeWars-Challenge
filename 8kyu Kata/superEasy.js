// QUESTION
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


// SOLUTION
function problem(x){
    //your code here
    if(x === x.toString()){
      return "Error"
    }else{
      return (x * 50) + 6
    }
  }