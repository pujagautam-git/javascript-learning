// function myNumber(a,b) { //a and b is parameters
// console.log(a+b);
// }
//  myNumber(3, 4) //answer is7  //3 and 4 is argument


// function myNumber(a,b) {
// console.log(a+b);// answer is 7
// }
//  const result= myNumber(3, 4)
// console.log("Result:",result); //result will be undefined

function myNumber(a,b) {
return(a+b);
}
//  const result=myNumber(3, 4)
//  console.log(result) //this is the way of result 7
// console.log(myNumber(3,4)) // this is also the another way

function userLoggedIn(username) {
    return`${username} just logged in`
}
// console.log(userLoggedIn("puja")) //puja just logged in

//+++++++++++if else syntax++++++++++//
function userLoggedIn(username) {

    if(username ===undefined){//this or if(!username)
console.log("please enter a username");//please enter a username
return //after first return down return will not work 
    }
    return`${username} just logged in`
}

// console.log(userLoggedIn()) //undefined

function userLoggedIn(username="puja") {

    if(username ===undefined){//this or if(!username)
console.log("please enter a username");//please enter a username
return //after first return down return will not work 
    }
    return`${username} just logged in`
}

// console.log(userLoggedIn("hari")) //hari is just looged in 


function CalculateCartPrice (num1){
    return num1
}
// console.log(CalculateCartPrice(200,300,400)) //it will give frst argument 200

//++++++++++rest operator ...rest +++++++++++++//
function CalculateCartPrice (...num1){
    return num1
}
// console.log(CalculateCartPrice(200,300,400))


///+++++++++++++val1,val2,..num +++++++++++++++//

function CalculateCartPrice (val1,val2, ...num1){
    return num1
}
console.log(CalculateCartPrice(200,300,400,500,2000))//num will be 400,500,2000 and value will be 200,300

////++++++++++++++ from object to function ++++++++++++++///
const user = {
    username:"puja",
    price:199
}
function handleObject(anyobject) {
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
 handleObject(user)//  username is puja and price is 199
 handleObject({
    username:"sam",
    price:20
 }) //now change to "username is sam and price is 20" we can pass value directly also 

 //++++++++++++++++++++++ array to function ++++++++++++++//
 const arrayValue=[200,400,500,600]

 function arraynext(getarray){
    return getarray[1]
 }
 console.log(arraynext(arrayValue));//on console first function to array 
 console.log(arraynext([200,300,100,500]));//on console first function to array even if we chnage the value also
