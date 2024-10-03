//Code your solutions in this file

//Q1
const fiveToOneHundred = () => {
  for (let i = 5; i<101; i++) { 
    console .log(i)
    } 
}
 //fiveToOneHundred()

 //Q2
 const multiplesOfThree = () => {
  for(let i = 0; i <= 100; i++){
      if(i % 3 === 0) {
          console.log(i)
      }
  }
}

//multiplesOfThree()

//Q3
 const multiplesOfThreeOrFive = () => {
    for (let i = 0; i<101; i++){
        if (i % 3 === 0 || i % 5 === 0) {
        console.log(i)
        }
        }
 }

//multiplesOfThreeOrFive()

//Q4
const untilNum = (num) => {
  for(let i = 1; i <= num; i++) {
      console.log(i)
  }
}
//untilNum(10);

//Q5
const multiply = (int1,int2) =>{
    return int1 * int2  
}

// console.log( multiply(2,4) )
// console.log( multiply(10,-5) )
// console.log ( multiply(3,7.5) )

//Q6
const tripleSum = (n1, n2) => {
  let sum = n1 + n2
  if(n1 === n2) {
      return sum * 3
  }else {
      return sum
  }
}

//console.log(tripleSum(3, 3))

//Q7
const isNegative = (num) =>{
    if (num < 0){
        console.log('True')
    }else {
      console.log('False')
    }
  }
  
  // isNegative(3)
  // isNegative(-2)
  // isNegative(Math.Pi)

  //Q8
  const triangleArea = (base, height) => {
    return base * height / 2 
}

// triangleArea(5, 7)    //returns 17.5
// triangleArea(6, 8)    //returns 24



//Q9

const betweenTwentyAndFourty = (int)  =>{
    if (int >20 && int <40){
        return 'True'
    }else{ return 'False'}
  }
  
  console.log(betweenTwentyAndFourty(20))
  console.log(betweenTwentyAndFourty(21))
  console.log(betweenTwentyAndFourty(39))
  console.log(betweenTwentyAndFourty(40))
 
 