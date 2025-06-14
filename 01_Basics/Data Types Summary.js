// Basis on Memory and fetching data, data is divided into 2 types 
// Primitive (Changes are made in original copy) 

// further into 7 
// 1. String
let Email = Mohsin
// 2. Number
const score = 100
const scoreV = 100.3
// 3. Boolean
const loggedIn = false
// 4. Undefined
let MyEmail;
// 5. Symbol
const id = Symbol('123')
const AnotherId = Symbol('123')
// Both of the above are same, but still if we run operations, it will give false, because it is the ability of Symbol to give uniqueness to similar data

// 6. BigInt
const bigNumber = 32243145n
// 7. Null
let outsidetemp = null

// Reference (Non primitive)
// server provides reference of original of this type of data
// 1. Array (written in [])
const heros = ['Khalid', 'Umar']
// 2. Objects (written {})
let myObj = {
    name: 'Mohsin',
    Age: 25,
}
// 3. Functions
const myFunc = function(){
    console.log('Hello World');
    
}

// null will be returned as object in data typeof
// all non-primitive are returned as Function while function as function object 

// for further detailed reading //https://tc39.es/ecma262/#sec-source-text



// ++++++++++++++++++++++++

// Two types of memory
// 1. Stack (For Primitive data)
// 2. Heap (For Non Primitive)


// Stack memory will provide you with the copy of Primitive data types, so if you change on in codes, it will not alter the original one in the Stack memory, as it only proides you with a copy

// While in Heap memory, all the non primitive types provide the original reference value, so cahnging it will alter the original one in memory
