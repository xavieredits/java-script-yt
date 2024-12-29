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
const mySym = Symbol("pass1")
const secUser= {
    name:"sam",   
    "fullName":"Xani_Oster",         
    [mySym]: "mypass1",
    age:24,                                               
    location:"japan",
    email:"sam@gmail",
    isLoggedin:true,
    lastLoginDays:["wednesday","tuesday"]
}
console.log(secUser[mySym]);
console.log(typeof secUser[mySym]);

//overwiriting values

secUser.email="sam@microsft.com"
console.log(secUser);

// want that no overwrting can be perfromed on the object 
// use
  
Object.freeze(secUser)
secUser.email="sameeee@gmail.com"// didn't work
console.log(secUser);


////// functions ///////////
