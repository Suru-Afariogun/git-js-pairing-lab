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


//Q5



const multiply = (int1,int2) =>{
    return int1 * int2  
}

console.log( multiply(2,4) )
console.log( multiply(10,-5) )
console.log ( multiply(3,7.5) )




//untilNum(10);
 
 