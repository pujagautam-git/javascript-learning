//singleton

//object literals
const mySym =Symbol("key1")


const newobj={
    name:"puja",
    "full name":"puja gautam",
    [mySym]:"mykey1",//now it became symbol other wise on mysym it is string
    age:18,
    location:"biratnagar",
    email:"puja@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(newobj.email)// this is not okay when we have "string" key 
// console.log(newobj["email"])// better use this format
// console.log(newobj["full name"]) //better use this format
// // console.log(newobj.full name)//this is the reason we have to use ["fullname"]otherwise it will be wrong and output will not come
// console.log(newobj.mySym)//it answer is mykey1
// console.log(typeof newobj.mySym)//but it not convert to symbol it convert to string because we do not add[mySym]
// console.log(newobj[mySym]) //this is the correct way to write syntax to show symbol []

newobj.email="puja.chatgpt.com"
Object.freeze(newobj) // it will give new email and block old email after using freeze
newobj.email="pujajot.com" // see it will not showthis it will show "puja.chatgpt.com" after using freeze
console.log(newobj)

