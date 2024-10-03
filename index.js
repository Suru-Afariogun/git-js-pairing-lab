//Code your solutions in this file
<<<<<<< HEAD
//Q1
=======
//Question 1
>>>>>>> 4432947501e5846e8d60136ba542838a97da4a3f
const fiveToOneHundred = () => {
  for (let i = 5; i<101; i++) { 
    console .log(i)
    } 
}
 fiveToOneHundred()
//Q2
 const multiplesOfThree = () => {
    for (let i = 0; i<101; i++){
    if (i % 3 === 0 && i % 2 === 0) {
    console.log(i)
    }
    }
 }
 multiplesOfThree()
//Q3
 const multiplesOfThreeOrFive = () => {
    for (let i = 0; i<101; i++){
        if (i % 3 === 0 || i % 5 === 0) {
        console.log(i)
        }
        }
 }


 //Question 2
 const multiplesOfThree = () => {
  for(let i = 0; i <= 100; i++){
      if(i % 3 === 0) {
          console.log(i)
      }
  }
}

multiplesOfThree()
 
 multiplesOfThreeOrFive()
//Q4

const untilNum = (num) => {
    for (let i = 1; i<=num; i++){
        console.log(i)
    }
}

untilNum(50)
//Q5



const multiply = (int1,int2) =>{
    return int1 * int2  
}

console.log( multiply(2,4) )
console.log( multiply(10,-5) )
console.log ( multiply(3,7.5) )

//Q6

const add = (num1, num2) => {
    if(num1 == num2){
        return (num1+num2)*3
    } 
    return num1 + num2
    
}

console.log(add(2,4))
console.log(add(10,-5))
console.log(add(3,7.5))
console.log(add(5,5))
console.log(add(6,6))

