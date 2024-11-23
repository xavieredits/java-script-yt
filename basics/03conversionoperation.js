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

// ****************************************** OPERATIONS *********************************************************************
 let value= 3
 let negValue =-value
 console.log(negValue); // -3 negative value

 console.log(2+2);// addition
 console.log(2-2);// subtraction
 console.log(2*2);// multiplication
 console.log(2**2);// power
 console.log(2/2);// division
 console.log(2%2); // remainder (use in cryptography and stocks software)

//  joining two strings

let str1 ="hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3);

//  real problem 

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2 + 2);//122
console.log(1+2 + "2");//32
//  all these different values and output cause due to some guidliness and rules in javascrpit can be found in ecma
// to solve these kind of issues prentheses "()" to create better code example:
console.log((3+4) *5%8);//3

// trickey conversions

console.log(+true);//is 1 cause true itself is a boolean
console.log(+"");// is 0 cause "" is itself a 0 and use for boolean 
// but
// console.log(true+);// not possible and will give error

let num1 ,num2 , num3
num1 = num2 = num3 = 2+2 // bad redibility and wrong way to assign value

let gameCounter =100
gameCounter++; // or ++gameCounter                  // prefix and postfix operator
console.log(gameCounter);

 


