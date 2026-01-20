let someValue="puja123"
let moreValue=Number(someValue)
console.log(moreValue) //nan
console.log(typeof (moreValue)) //number

let score= 33
let nextValue = String (score)
console.log(nextValue) //33
console.log(typeof (nextValue)) //string

let value =null
console.log(typeof value);//object
console.log(typeof(value))//object

let valueInNumber = Number(value)
console.log(valueInNumber);//0
console.log(typeof valueInNumber)//number

let isLoggedIn =1 //"" is false with "name" is true
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)