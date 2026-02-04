//chaining method for filter, map//
const myarr=[1,2,3,4,5,6,7,8,9]
const newarr=myarr
            .map((num)=>num*10)
             .map((num)=>num+2)
              .map((num)=>num-6)
               .filter((num)=>num>=40)
               console.log(newarr);


//++++++++++++reduce+++++// accumulator, currentvalue , initialvalue
const valarr=[1,2,3]
const newvalarr=valarr.reduce((acc,curval)=>acc+curval,0)
console.log(newvalarr)// 0,1=1 again 1,2=3, again 3,3=6 answer = 6