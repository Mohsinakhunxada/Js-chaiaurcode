// // Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023,0, 23)
// Remember in java, first is always zero, so here zero is January
// let myCreateDate = new Date(2023,0, 23);
// let myCreateDate = new Date(2023,0, 23, 5, 3);
// let myCreateDate = new Date("2023-01-23");
// let myCreateDate = new Date("01-14-2023");

// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

// To get result in seconds you have to divide it by 1000, else result will be provided in millisecs


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
// // +1 as it starts with 0
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    dayPeriod: 'long',
    weekday: 'long' 
})
// Press Ctrl+ Spacebar for all relevant SUGGESTIONS















