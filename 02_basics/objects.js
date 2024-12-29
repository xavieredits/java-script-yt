// THERE ARE TWO WAYS OF DECLARING AN OBJECT 
//LITERALS AND CONSTRUCTOR 

// SINGLTON <= CREATED BY CONSTUCTOR 
// Object.create //<= constructor 
const jsUser= {
    name:"xani",
    "fullName":"Xani_Oster",                                   // this value now can never be accessed by method 1
    age:23,                                                     //  hence should be accessed by method 2
    location:"canada",
    email:"xani@gmail",
    isLoggedin:false,
    lastLoginDays:["monday","tuesday"] 
}
//  litrall object ^

// method 1 of access in values from object 
console.log(jsUser.name);

// method 2 of access in values from object 
console.log(jsUser["name"]); // remember in objects the key value like "name" is allready taken as sting hence should be asked 
// in sting

console.log(jsUser["fullName"]);

// declayring a symbol and correct synatax to use it 
const mySym = Symbol("pass")
const secUser= {
    name:"sam",            
    [mySym]:"key1",            
    age:24,                                               
    location:"japan",
    email:"sam@gmail",
    isLoggedin:true,
    lastLoginDays:["wednesday","tuesday"]
}
console.log(typeofecUser[mySym]));
