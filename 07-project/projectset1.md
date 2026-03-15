# Projects related to Dom

## projects link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution of color changer in body from button

```javascript

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click', function(e){
  console.log(e)
  console.log(e.target)
  if(e.target.id==='grey'){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id==='purple'){
    body.style.backgroundColor=e.target.id
  }
})
});

```
## project 2 solution bmi calculator

```javascript
const form =document.querySelector('form')
form.addEventListener('submit', function(e){
e.preventDefault();

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results= document.querySelector('#results');

if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML= `Please give a valid height ${height}`;
}
else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML= `Please give a valid weight ${weight}`;
}
else {
const bmi=(weight / ((height* height)/ 10000)).toFixed(2);
results.innerHTML=`<span>${bmi}</span>`
}


})
```
## project 3 digital clock display  solution
```javascript 
const clock=document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);//from what time period do we need to display

```

## project 4 guess the random number solution
```javascript
let randomnumber = parseInt(Math.random()*100 + 1);
const submitbutton = document.getElementById('Subt')
const userInput = document.getElementById('guessField')
const guessSlot = document.getElementsByClassName('guesses')
const remaining = document.getElementsByClassName('lastResult')
const lowhigh = document.getElementsByClassName('lowOrHi')
const startOver = document.getElementsByClassName('resultParas')


const p = document.createElement('p')

let prevGuess = []// aaray having submit value store so that user do not have to guess same number again
let numGuess = 1  // it should be start from 1 to 10

let playGame = true //after event or coins finish we can continue
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess= parseInt(userInput.value);
    validateGuess(guess)
  })
}

function validateGuess(guess) { //to see if valid number is guess or not if i give a,b,c,d than or i give 500 than  what will happend

  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if(guess <1){
    alert("Please enter a  number more than 1")
} else if(guess > 100){
  alert("Please enter a  number less than 100")
} else{
  prevGuess.push(guess)
  if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game over. Random number was ${randomnumber}`)
    endGame()
  }else {
    displayGuess(guess)
    checkGuess(guess)
  }
}
  }

  function checkGuess(guess){//message print 
    if(guess === randomnumber){
      displayMessage(`you guess it right`)
      endGame()
    }else if(guess > randomnumber){
    displayMessage(`Number is 1000 high`)
    }
  }
function displayGuess(guess){
  userInput.value = ''
guessSlot.innerHTML += `${guess}   `
   numGuess++;
  remaining.innerHTML =`${10 - numGuess}`
  }

  function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
  }

  function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start  new game </h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
  }

  function newGame(){
    document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
      randomnumber = parseInt(Math.random()*100 + 1);
      prevGuess=[]
      numGuess=1
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame=true
    })
  }


```