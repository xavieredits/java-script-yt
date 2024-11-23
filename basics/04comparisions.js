console.log(2>1);//true
console.log(2>=1);//true
console.log(2<1);//false
console.log(2==1);//false
console.log(2!=1);//true

//
console.log("2">1);// true cause javascrpit convertes the string to number for comparisions
console.log("02">1);// true cause javascrpit convertes the string to number for comparisions

// now comes to datatype 
 console.log(null>0);//here null is not coverted for comparision with 0 hence false
 console.log(null==0);//here null is not coverted for comparision with 0 hence false 
 console.log(null>=0);// here null is coverted by the js for the comparision with 0 // hence true
// null => 0

// for undefined false
 console.log(undefined>0);//false
 console.log(undefined<0);//false
console.log(undefined==0);//false


// note comparisions andequality checks are different 

// *********************************************************** srtict check ****************************
console.log("2"==2); // true conversion occurs 
console.log("2"===2);// coversion  not occurs datatype is also checked
// (strict check ===)


