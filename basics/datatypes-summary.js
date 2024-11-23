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


//**************************************************************memory ***************************************************** */
// Stack(primitive) , Heap(refrence)(non primitive)

let ytName= 'xavier edits'

let anotherName = ytName
anotherName ="xaniplays"
console.log(anotherName);
console.log(ytName); // copy is changed not the real value and js reads the code in as sequence 

let user ={
    email:"can@gamil",
    paypal:"user@pal",
}
// values stored in heap format so orignal refrence is passed , therefore if any changes occures then the other value in refrence also changes
let usertwo = user

usertwo.email = "hist@google.coom"

console.log(user.email);
console.log(usertwo.email);










