const score = 400 // here javaScrpit is automatically convert to number datatype
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// used in  ecomerce webs and other apps for precision value {adds decimal}

const otherNumber =23.85533 //23.9
console.log(otherNumber.toPrecision(3));// rounds off to given value

// another example

const antoherNumber =123.88945 // 124
console.log(antoherNumber.toPrecision(3));

const hundreds = 10000000000 //10,000,000,000(output)
console.log(hundreds.toLocaleString());  //add comas like used in denotion of currency 

// for converting values into indian number system comas or any other currency

console.log(hundreds.toLocaleString('en-IN'));
// .Max safe integer is use to tell that how many vaules are allowed to take 

///////////////////////////////////////////////  Maths ///////////////////////////////////////////////

// maths comes integrated with javasctipt 
// example by typinc console.log(Math); in console of the browser mulptiple functions can be seen 


console.log(Math);
console.log(Math.abs(-4));
// tells the absolute vaule not signs
console.log(Math.round(4.6));// simple round function 
console.log(Math.ceil(4.2));// rounds the value even if the value after the decimal is lower than 5
console.log(Math.floor(4.8));//not rounds of gives the value before the point 
console.log(Math.min(4,5,2,7,8));
console.log(Math.max(5,7,2,8,9,0));

console.log(Math.random());// generates random values between 1 to 0 mostly decimal 
//  but 
console.log(Math.random()*10);// to shift the decimal and convert the number in to the whole number like 1,9,10 etc

// and the avoid the cases like 0.01 we add 1 with it  EXAMPLE:
console.log((Math.random()*10)+1);// addition of bracket is done to avoid bordmas and other calculative issues
// .floor is added later to reduce the numbers after the points 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max-min + 1))+min) // merge compound code to produce the value 

// NOTE: +1 must be added to avoid any generation of 0 randomly 















