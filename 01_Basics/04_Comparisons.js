// console.log(2 > 1);
// answer will be in boolean, true or false
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// same data types comparisons is easy but different daat types is surprising

// different types yield unpredictable results

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// 1 & 2 will be false while 3 will be true
// Reason is that '==' is an equality check, while other perform comparisons, >,<,>=,<=
// Comparisons convert null to a number, treating it as a zero.

// '===' does not convert and checks the data type and will give false if of different types
// Avoid conversions like this, write clean code









