let a=900//this is global scope


if(true){  //from here is block scope 

let a = 300
var b= 200 //over here the problem is this all are inside if so result should not come because its not defined but at var it shows value which is wrong so var is not used
console.log("inner: ", a)//300
// const c=400
}
console.log(a) //now outer value is 900
// console.log(b)
// console.log(c)

 {}// curly bracket is scope

//  for(let i=0; i<array.length; i++) {
//     const element=array[i]
//  }

 ///++++++++++++++++++ nested scope++++++++++++// it is that child function can access parent variable
 function one(){
    const username="puja"

    function two(){
        const website ="youtube"
        // console.log(username);//inner function can access outer function

    }
    // console.log(website);
    two() //without two execute hudaina so halnu parcha one lai execute garna
 }
 one()

 if(true){
    const usernis="hitesh"

    if(usernis==="hitesh"){
        const page="google"
        console.log(usernis + page)
    }
 console.log(usernis)
 }
 


