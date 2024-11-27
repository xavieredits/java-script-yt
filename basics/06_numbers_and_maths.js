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







