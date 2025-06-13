const marvel_heroes = ['Thor', 'Ironman', 'Spiderman']

const dc_heroes = ['Batman', 'Superman', 'Flash']

// marvel_heroes.push(dc_heroes)

// push operation in array will keep the whole array as one object, so if you want to target one specific item inside array you should do the following

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// see if you only type [3], it will get you the whole array, you need to type an extra number to get the data inside array

// const AllHeroes = marvel_heroes.concat(dc_heroes)
// console.log(AllHeroes);
// // will add all in one array

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

// const anotherArray = [1, 2, 3, [2, 4], 5, 6, [7, 8]]

// const Real_anotherArray = anotherArray.flat(Infinity)

// console.log(Real_anotherArray);

// you can ask if an object is Array
console.log(Array.isArray('mOHSIN'));

// AND YOUY CANM ALSO convert one into array

console.log(Array.from('mOHSIN'));

// if you try to change an object into array, first it will give empty object, as you need to define wheter you want aray of keys/values/pair/anything else

console.log(Array.from({name : 'Mohsin'}));

// if you want to convert multiple variables into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// Further study the methods (From, Is, Of)





