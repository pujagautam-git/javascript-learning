const userEmail ="puja@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


//++++++++++falsey values +++++++++++++++++//
false, 0, -0, "",bigInt0n, null, undefined, NaN

//+++++++++++ truthy value +++++++++++++//
true, 1, [], "0",'false', " ", {},  function(){}

//+++++how to check empty array++++//
if(userEmail.length === 0){
console.log("Array is empty");
}

//++++++ how to check empty object+++++++++//
const emptyobj ={}
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}

//Nullish coalescing operator (??): null undefined

let val1;
val1= 5 ?? 10 // answer is 5 which is first value
val1 = null ?? 10 // answer is 10  because of null
val1=undefined ?? 15 // answer is 15
console.log(val1); 


//ternary operator logic +++++++++++//
const iceTeaPrice =100
iceTeaPrice >=80 ? // answer less than 80 
console.log("less than 80"): console.log("more than 80")