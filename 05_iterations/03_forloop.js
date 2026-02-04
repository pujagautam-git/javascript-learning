// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings ="hello world!"
for (const greet of greetings) {
    console.log( `Each char is ${greet}`)
}

//Maps 

const map= new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('Fr',"France")

console.log(map);//Map(3) { 'IN' => 'India', 'NP' => 'Nepal', 'Fr' => 'France' }
// for (const key of map) { 
    // console.log(key) //if we put key that all three will key value will come as [ 'IN', 'India' ][ 'NP', 'Nepal' ][ 'Fr', 'France' ]
    for(const [key, value] of map){
console.log(key, '-', value);
    }

