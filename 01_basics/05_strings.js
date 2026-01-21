const  name="puja"
const setCount=50
console.log(`My name is ${name}  and i am having ${setCount} rupess`)

const gameName =new String('helloworld')
console.log(gameName[0]);
console.log(gameName[3]);
console.log(gameName[6]); //to know string index key and value pair
console.log(gameName.__proto__)//{}
console.log(gameName.length); //total 10 
console.log(gameName.toUpperCase);
console.log(gameName.charAt(5));// which key have 5 is w
console.log(gameName.indexOf("d")) // 9 for value

const newString= gameName.substring(0,5)//hello
console.log(newString);

const anotherString = gameName.slice(-8,4) ll
console.log(anotherString)

const newStringOne="  puja  " //   puja
console.log(newStringOne)
console.log(newStringOne.trim())//puja

const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))//https://hitesh.com/hitesh-chaudhary
console.log(url.includes('sundar'))//false cannot
console.log(gameName.split('-'))// [ 'helloworld' ] to convert to array





