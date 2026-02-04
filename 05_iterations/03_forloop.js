// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings ="hello world!"
for (const greet of greetings) {
    console.log( `Each char is ${greet}`)
}

//Maps 

const map= new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('Fr',"France")

console.log(map);//Map(3) { 'IN' => 'India', 'NP' => 'Nepal', 'Fr' => 'France' }
// for (const key of map) { 
    // console.log(key) //if we put key that all three will key value will come as [ 'IN', 'India' ][ 'NP', 'Nepal' ][ 'Fr', 'France' ]
    for(const [key, value] of map){
console.log(key, '-', value);
    }

//     const myObj={
//         "game1" :"NFS",
//         "game2" :"  Spiderman"
//     }

// for (const [key, value] of myObj) {
    // console.log(key, value) //for  object for of doesnot work so we used forin
   



//++++++++++++++++for in ++++++++++++++//
const myObject={
    js:'javascript',
    rb:"ruby",
    cpp:"c++",
    swift:"swift by apple"
}
for (const key in myObject) {
//  console.log(key);//it will give all key js rb cpp swift
  console.log(`${key} shortcut is ${myObject[key]}`)// to know value we need myobject[key]
}

const myarr=["puja", "Sita", "gita"]
for (const key in myarr) {
   // console.log(key);//if we do this than index number will so 
  
    console.log(myarr[key]);// same as object for in 
    
}

//++++++++++for each++++++++++++//
const coding=["js","ruby","java","python"]

coding.forEach(function (item){
console.log(item)
})

//or can used arrow function
coding.forEach((item)=>{
console.log(item)
})

//we can used the index and arr in item
coding.forEach((item, index, arr)=>{
console.log(item, index, arr)
})


//higher order object loop// array inside object

const myCoding=[
{
    myfile:"javascript",
    mysave:"js"

},
{
    myfile:"java",
    mysave:"java"

},
{
    myfile:"python",
    mysave:"py"

}
]
myCoding.forEach((item)=>{
console.log(item.mysave);
})
