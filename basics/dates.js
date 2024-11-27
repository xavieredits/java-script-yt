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
//  note months starts from 0 in javascript




