const addnum= (num1, num2) =>{ // ()=>{} this is arrow function structure
    return num1+num2
}
// console.log(addnum(3,5)); //this is arrow function 

//+++++++implesive return arrow function++++++++//

const addnum2=(num1,num2) => num1+num2
// console.log(addnum2(2,3))

//++++++++++or we can use alternative as () and no need for return +++++++++//
const addnum3=(num1,num2) => (num1+num2)
// console.log(addnum3(12,3))

//for object // used ({})
const addnum4=(num1,num2) => ({username:"hari"})

//++++++++++++++=immediate invoked function(iife)++++++++//
//global scope ko pollution bata hatauna iife use garincha


(function chaiaur(){ //this is name iife name called chaiaur
    console.log(`baby sleeping`);

})(); //to execute 2 iffe we need ; 

( (name) => { //this is called unname iife
    console.log(`baby sleeping here ${name}`);

})('riya')