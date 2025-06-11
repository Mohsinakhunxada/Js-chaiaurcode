let score = "14sa"

let StringAbility = Number (score)

console.log(typeof StringAbility);
console.log(StringAbility);

// JS will convert everything in the "type" you command of, but if you want to see its reality; console log will show
// when you apply "" to number, it becomes string
// "14" -> into number 14
// "14abc" -> NaN (Not a Number) but its type will be number
// True -> 1; false -> 0

let loggedIn = 0

let booleanloggedIn = Boolean(loggedIn)
console.log(booleanloggedIn);
console.log(typeof booleanloggedIn);

// can be converted to any type, string and etc

