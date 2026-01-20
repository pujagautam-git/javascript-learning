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


let str1="hello"
let str2=" puja"
let str3= str1 + str2
console.log(str3) //hello puja

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 +"3");//33
console.log((3+2)*(3-2)*5) //25
