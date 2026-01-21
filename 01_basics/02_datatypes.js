"use strict" // treat all js code as newer version

// alert(3+
    // 3) // code readability should be high 
    console.log("puja")

    let name= "puja"
    let age= 19
    let isLoggedIn = false

    //number= 2 to power 53
    //biginit
    //string
    //boolean
    //null= standalone value(empty value)
    //undefine= let state;
  //object

  console.log(typeof age);
  console.log(typeof null) //is object


  //primitive datatype are 7 symbol, number, boolean,string,null,undefined,bigint

  //nonprimitive or reference are 3 array, function, object

  //+++++++++++++++++++++++++++++++++++++++++++

  //memory stack (primitive), heap(non-primitive)

  let myYoutubename ="hellodotcom"

  let anothername = myYoutubename
  anothername = "teaandcode"

  console.log(myYoutubename);
  console.log(anothername); //for stack it will change value and give old value also

  let userOne ={
    email:"user@google.com",
    upi:"user@ybl"

  }
let userTwo = userOne
userTwo.email="puja@google.com"
console.log(userTwo)
console.log(userOne) //for heap it will chnage to new value totally and doexnot give backup old value 