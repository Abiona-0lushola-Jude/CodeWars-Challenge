// Question

// for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:

// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }



// Solution
function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let i = 0;i<arr.length;i++){
      if(arr[i] % 2 !== 0){
          odd.push(arr[i])
      }else{
          even.push(arr[i])
      }
    }
    return [odd,even];
  }