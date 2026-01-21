//+++++++++++++++++number++++++++++++++++++++++++++
const score=400
console.log(score)//400
const balance= new Number(100)
console.log(balance)//[Number:100]
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));// 100.00 it will five decimal to .00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); //123.9 it wil give value added of first decimal
const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));// it will give number on comma every 10 


//++++++++++++++++++++++++++++++ maths ++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //it will be postive even on - so 4
console.log(Math.round(4.6)); //it will giver bigger after decimal is 5
console.log(Math.ceil(4.8)); //top so 5
console.log(Math.floor(4.8)); // down so 4
console.log(Math.max(4,8,9,10));//10
console.log(Math.min(4,8,3,2,7));//2
console.log(Math.random());//it will start from 0to 1 like 0.6484549956,0.35569738217
console.log(Math.random()*10);// every terminal it will increase 1, 3 ,5.083758775y6  like this 
console.log((Math.random()*10)+1); // start from higher value
console.log(Math.floor(Math.random()*10)+1); // it will not give after point it will give fixed number only

const min=  10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min); //it will give above 10 in every terminal










