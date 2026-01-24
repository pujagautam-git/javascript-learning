//singleton


// const tinderUser= new Object() //both is same format 
const tinderUser = {} // same format {}
tinderUser.id="123ab"
tinderUser.name="hari"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

//+++++++++++to paste one object inside another we can use like this ++++++///
const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"puja",
            lastname:"gautam"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname) //puja 


//+++++++++++ object also combined +++++++++++++++//
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3=  Object.assign(obj1, obj2)//this is okay but used as target and source so always as {} this as a target and other ob2, ob2 as source
// const obj3=  Object.assign({},obj1, obj2)//this is correct approach
const obj3 ={...obj1, ...obj2} //this is spread operator same as array this is also alternative
// console.log(obj3);


//++++++++++to get database value of aaray of object++++++++++//
const users=[
    {
        id:1,
        email:"hari@gmail.com"
    },
     {
        id:2,
        email:"hari@gmail.com"
    },
     {
        id:3,
        email:"hari@gmail.com"
    }
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it will give key
console.log(Object.values(tinderUser)); //it will give values
// console.log(Object.length(tinderUser));
console.log(Object.entries(tinderUser)); //it will give each seperate [ [ 'id', '123ab' ], [ 'name', 'hari' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //it will give answer  on bollean as true because yo isloggedin ch 


//++++++++++++++++object destructuring+++++++++++++//
const course ={
    coursename:"js learn",
    price:"1000",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor} =course
console.log(courseInstructor) //hitesh or alternative as 

const {courseInstructor:instructor} =course
console.log(instructor) //same answer just give short cut name for courseinstructor to instructor

//++++++++++++++json format object structure for api +++++++++++++++//
{
    "name": "hari",
    "address":"brt",
    "price": "free" 
} //sometimes it might comes on array of object format for json 