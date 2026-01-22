const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros) // come together join [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_hero=[...marvel_heros, ...dc_heros]
console.log(all_new_hero)// this also same came as together just another alternative way

const another_array =[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity)
console.log (real_another_array) // yo pani another alternative to put all together


/////for interview /////
console.log(Array.isArray("Hitesh"))//this is not an array so false answer
console.log(Array.from("puja"))// it will convert to array format ['p,'u,'j','a']
console.log(Array.from({name:"puja"}))//this is not correct way to ask we have to include what key or value than work other wise []is answer

let score1=100
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3));//it will come together on one set of array
