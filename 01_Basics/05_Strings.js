 const name = 'Mohsin'
 const repocount = 50

 console.log(`Hello my name is ${name} and repo count is ${repocount}`);
 
 const newGame = new String('Mohsin-Ak-com')

// now we are trying different methods for manipulating the string values 

console.log(newGame[0]);
console.log(newGame.__proto__);
console.log(newGame.length);
console.log(newGame.toUpperCase);
console.log(newGame.charAt(2));
console.log(newGame.indexOf('h'));


const newString = newGame.substring(0, 3)
console.log(newString);

const anotherString = newGame.slice(-8, 4);
console.log(anotherString);

const newStringone = '  MOhsin  '

console.log(newStringone);
console.log(newStringone.trim());

const url = "https://mohsin.com/mohsin%20khan"

console.log(url.replace('%20', '-'));

console.log(url.includes('great'));

console.log(newGame.split('-'));














