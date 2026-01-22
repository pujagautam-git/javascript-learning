//++++++++++++++arrays+++++++++++++++

const myArr = [0,1,2,3,4,5]
// const myHero =["spiderman","batman"]
// console.log (myArr[2]); //index 2
// console.log (myHero[3]);//undefine

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]) //1 


myArr.push(7)
// console.log(myArr);// 7 include in last
// myArr.pop()
// console.log(myArr); // 7 get out from aaray
// myArr.unshift(10)
// console.log(myArr); //10 include in starting of aaray
// myArr.shift(4)
// console.log(myArr);// 10 remove from array from first
// myArr.shift()
// console.log(myArr);// 0 will be out from array

// console.log(myArr.includes(9))//false
// console.log(myArr.indexOf(5))//4

// const newArr = myArr.join()
// console.log(myArr);//it will give that original aaray on[]
// console.log(newArr);// it will give on string without []

console.log(myArr.slice(1,3)) // 1 index deki suru last ko 3 string include hudaina
console.log(myArr.splice(1,3)) // 1 deki 3 samma kai include huncha nut original aaray ma thyo value hunna
//  like 0,4,5 matra aaucha not 1,2,3
