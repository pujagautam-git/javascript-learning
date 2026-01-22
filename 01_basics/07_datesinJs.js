let myDate = new Date ()
console.log(typeof myDate);// object
console.log(myDate.getDate());// date 22 gatey
console.log(myDate.getHours());//
console.log(myDate.toDateString()); //Thu jan 22 2026
console.log(myDate.toISOString()); //2026-01-22T 15:27:24.004Z
console.log(myDate.toJSON());// same as isostring
console.log(myDate.toLocaleDateString());//1//22/2026 date show of today
console.log(myDate.toLocaleString());//date and time today
console.log(myDate.toTimeString());//universal date show 

let myCreateDate = new Date(2023, 0 ,23); //month jan start with 0
let myUserDate = new Date(2023, 13 ,23);// 13 is feb
let myViewDate = new Date(2023, 5 ,33);//33 is convert to 03 after 30 
console.log(myCreateDate);
console.log(myUserDate);
console.log(myViewDate);


let myCreatedDate= new Date(2023,0,23,5,3);
console.log(myCreatedDate); // 2023-01-23  5 bajera 3 min
let myTimeStamp = Date.now()
console.log(myTimeStamp) // 18475899320 this is long milli second value from jan 1 1970
console.log(myCreatedDate.getTime()) // to get milli second we can work on this format .gettime