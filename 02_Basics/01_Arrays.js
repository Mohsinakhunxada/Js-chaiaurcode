// // Arrays

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ['Khalid', 'Umar', 'Usman']

// const myArr2 = new Array(1, 2, 3, 4, 5)
// // here you dont have to enter Square Brackets

// console.log(myHeroes[0]);
// console.log(myArr[0]);

// Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexof(3));

// const newArr = myArr.join()

console.log(myArr);
// console.log(typeof newArr);

// Slice & Splice
// Splice changes teh original array

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);










