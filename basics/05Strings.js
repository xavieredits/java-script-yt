const name ="sam"
const repoCount ="50"

// concatination 
console.log(name+repoCount);//or
console.log(name + repoCount + "value");// outdated santax

console.log(`name:${name} repocount:${repoCount}`);

//Another way

const gameName = new String ("csgo")
console.log(gameName);
console.log(gameName[0]);// to extracts a value from index
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());// converts to lower case
console.log(gameName.toUpperCase());// converts to upper case

console.log(gameName.charAt(2)); // to find the character present at the index\
console.log(gameName.indexOf("g")); // to find the index of character given


const newString = gameName.substring(0,2)
console.log(newString);// extracts a portion of string via indexing 
// note the last value is not included cause of 0 index 


const antoherString = gameName.slice(-3,4)
console.log(antoherString); //Only slice can have the negative value not substring 






