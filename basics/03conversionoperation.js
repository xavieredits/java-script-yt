let score = 33

console.log(typeof score);// number
console.log(typeof(score));// another method of knowing type and writing code output is same

// if value of score is writen in  ":" then string
let scr ="33"
console.log(typeof(scr));// string

// converting data type
let valueInNumber =Number(scr) // converts into numeber
/*if the vale of the above variable includes character like "abc" then also the 
datatype is converted to number but output changes */

let total= "123abc" //if the value is null output is 0 is the value is undefined the it is NAN
let chang= Number(total);
console.log(typeof(chang));
console.log(chang);//nan
// if vaule of total is in true or falso (boolen) then the output is in 1 or 0. 
// IF THE VALUE IS STRING WHICH IS UNCONVERTABLE THAN THE OUTPUT IS NAN


let isLoggedIn =1
let boolenIsLoggedIn =Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);
// true for 1 false for 0 
// for empty strings "" value is false
// for strings "xani" value is true