 //+++++++++++filter++++//
 const myNums=[1,2,3,4,5,6,7,8,9]
//  const newnums=myNums.filter((num) =>{
    // return num >4
//  })
//  console.log(newnums);//this way answer will come from 5 to 9


//+++++alternative way +++++++//
const newnums=myNums.filter((num) =>num >4
 )
 console.log(newnums)



 const movie=[
    {title:"kuchkuch hota heh", hero:"srk", heroin:"kajol",year:2003},
     {title:"kal ho naho", hero:"salman", heroin:"alia",year:2005},
      {title:"kabul", hero:"ajay", heroin:"kareena",year:2009},
       {title:"koi mil gaya", hero:"amir", heroin:"shredevi",year:1995},
        {title:"baghban", hero:"ranbir", heroin:"depika",year:2024},
 ]

 let newmovie=movie.filter((item)=>item.title==="baghban")

    newmovie=movie.filter((item)=>{
return  item.year>=2005
    } )

 console.log(newmovie)