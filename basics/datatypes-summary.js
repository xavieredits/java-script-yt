//  JavaScript is dynamically typed language 

//  Primitive datatype

//  7 types 
// String ,  Number , Boolean , null , undefined , Symbol , Bigint

 const score = 100
 const scoreValue =100.3
 
 const isLoogedIn = false
 const outsideTemp = null 
 let userEmail;

 const id =Symbol('123')
 const anotherId = Symbol('123')// both are different can be checked 

 console.log(id === anotherId);// false means they are not same
 
 const bigNumber = 8888888888888844345348888888888666666666664356345345234529345892374598n// automatically converted to bigint when added n in end
//  Reference (non premitive type)

//  Array , Objects , Functions 

 const heros =['batman','superman','ironman']
 let myObj={
    name: "xani",
    age: 23,
 }

 const myFunction = function(){
    console.log("hello");
}

console.log(typeof(bigNumber));
console.log(myFunction);
console.log(typeof(myFunction));

