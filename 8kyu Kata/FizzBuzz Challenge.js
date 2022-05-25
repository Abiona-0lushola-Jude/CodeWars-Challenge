// FizzBuzz Challenge
// Array involved
// if value is divisibe by 3 and 5, print "FizzBuzz"
// if value is divisibe by 3, print "Fizz"
// if value is divisibe by 5, print "Buzz"
let ansFizzBuss = []
let ansFizz = []
let ansBizz = []
let ansRest = []
// /working
function FizzBuzz(num){
    for(i=1;i<=num;i++){
        if((i%3 === 0) && (i%5 === 0)){
            // console.log('FizzBuzz')
            ansFizzBuss.push(i)
            // console.log(ansFizzBuss)
        }else if(i%3 === 0){
            // console.log('Fizz')
            ansFizz.push(i)
        //    console.log(ansFizz)
        }else if(i%5 === 0){
            // console.log('Buzz')
            ansBizz.push(i)
            // console.log(ansBizz)
        }else{
            // console.log(i)
            ansRest.push(i)
        }
    }
    console.log(ansFizzBuss)
    console.log(ansFizz)
    console.log(ansBizz)
    console.log(ansRest)
}


FizzBuzz(60)
