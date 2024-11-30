// TOPIC DATES AND TIME

let myDate = new Date()
console.log(myDate);// weird output need conversion 2024-11-27T11:30:23.139Z

console.log(myDate.toString());// Wed Nov 27 2024 11:32:21 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Wed Nov 27 2024
console.log(myDate.toISOString());//2024-11-27T11:32:21.959Z
console.log(myDate.toJSON());//2024-11-27T11:32:21.959Z
console.log(myDate.toLocaleDateString());//11/27/2024        
console.log(myDate.toLocaleString());//11/27/2024, 11:32:21 AM
console.log(myDate.toLocaleTimeString());//11:32:21 AM
console.log(myDate.toTimeString());//11:32:21 GMT+0000 (Coordinated Universal Time)

//  interview question 

console.log(typeof(myDate));// object

let myCreatedDate = new Date(2024 , 0 , 23)
console.log(myCreatedDate); //2024-01-23T00:00:00.000Z
console.log(myCreatedDate.toString());//Tue Jan 23 2024 00:00:00 GMT+0000
//  note : months starts from 0 in javascript


// adding time with dates FORMAT

let anotherDate = new Date(2023 , 0 , 23 , 5 ,3)
console.log(anotherDate.toString());// Mon Jan 23 2023 05:03:00 GMT+0000  time

// another method of writing date is dd/ mm /yy or yy/ mm /dd

// EXAMPLE
let currentDate = new Date("01-11-2023")
let pastDate = new Date ("2024-7-23");
console.log(`currentDate:${currentDate} and pastdat ${pastDate}`);

let mytepDate = Date.now()
console.log(mytepDate);// gives in millis sec

console.log(myCreatedDate.getTime());// to get time from any kind of date and time stamp and convert it to milli sec 

console.log(Math.floor(Date.now()/1000));// give more precise value for comparision and assumptions 
// simple world small value

let newDate = new Date() // note: date is object
console.log(newDate);// 2024-11-30T16:46:44.789Z (output)
//  more functions for date 
console.log(newDate.getMonth());//10
console.log(newDate.getDay());//6
console.log(newDate.getFullYear());//2024
console.log(newDate.getTime());//1732985312906 in milli sec

// FOR INTERNATIONATNALISATION 

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);
// 2024-11-30T17:27:23.960Z