// ARRYS

const myArr= [ 0,1,2,3,4,5,6]
//           {   Elements    } 
//  arry is an object which can contain mixture of datat and various values 

console.log(myArr[3]);

//  to know arryas create a shallow copy which means it's a copy which share the same references as those of the source 
// (in simpe words) the copy has the original source as the reference given 

// On the other hand deep copies does not share the same references as the same of the source

const myHers = ["marvle hers", " dc hers" ," the boys series" , " other unkonwn examplse",]
console.log(myHers.length);
console.log(myHers[2]);

// ARRY MEHTODS

myArr.push(6);// adding the any value of other element in the arry
myArr.push(7);
myArr.pop()// is used for removing last value from the arry
myArr.unshift(9);// adds a the given value to the start  
// note using unshift is time consuming and also puts load in computer 
// hence should not be used for larger opperetions
myArr.shift()// no paramerters are given cause it removes the first value form the arry
console.log(myArr);
 
// NEW THINg
console.log(myArr.includes(9));// false 
// this command is use as a query in this one 
// includes 9 means if the arry has any number which is 9
console.log(myArr);
