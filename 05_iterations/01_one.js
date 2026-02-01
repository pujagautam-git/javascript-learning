//for loop ///


for (let index = 0; index < 10; index++) {
    const element = index;
    if(element ==5){
//  console.log("5 is the best number")
    }
    // console.log(element);

}

for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
 for (let j = 0; j <=10; j++) {
    console.log(`inner loop value ${j} and outer loop ${i}`);

 }
    
}
let myArray=["puja","sita","hari"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

//+++++++break and continue +++++++//
for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log(`5 is here`);
        // break //in break till 4 will come and console of 5 will display tespachi ko tala kai dekhaudaina
    continue //in continue sabai dekhaucha 5 number ma chai 5 ko console dekhaucha
    }
    console.log(`value of i is ${i}`);
    
}