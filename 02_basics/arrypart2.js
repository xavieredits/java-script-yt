const marvelHeros =["spidy","ironman","captain"]
const dcHero=["superman","batman","flash"]

marvelHeros.push(dcHero);

console.log(marvelHeros);//[ 'spidy', 'ironman', 'captain', [ 'superman', 'batman', 'flash' ] ] 
// note : arrys didn't merge properly cause it has take arry as an element too 

marvelHeros.concat(dcHero); // also gives the same value like push ^ 
// it returns a new arry not the exesting one like push method ;(shorld not be used like this)
console.log(marvelHeros);

// something new; (consider this one)
const allHero = marvelHeros.concat(dcHero); // storing arry in another const variable is more helpfull
console.log("allheros",allHero);// allheros [ 'spidy', 'ironman', 'captain', 'superman', 'batman', 'flash' ]
// returns better output

// =========================== more easy method ================================= 

// SPREAD METHOD 
// ... method
const animeNames = ["jjk" , "one_peice" , "dbz"]
const newAnimes = ["sololev" , "mash" , "yourname"]

const allAnimes = [...animeNames,...newAnimes]
console.log(allAnimes);

// The spread operator is often used in combination with destructuring.

const anotherArry = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [6 , 7 , [ 4 , 5]]]
// falt is used to flatten a nested array
const usableArry = anotherArry.flat(Infinity)// <= in this bracket depth is defined to be solved from the complex arry 
console.log(usableArry);


///////////////////////// data scraping//////////

// asking if the given value is an arry or not 
console.log(Array.isArray("xani"));// false not an arry

console.log(Array.from("xani"));//[ 'x', 'a', 'n', 'i' ]
// it convets the entire sting into an arry

console.log(Array.from({name:"xani"}));//[]
// returns empty arry ^ important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// [ 100, 200, 300 ] output 
// it has converted the variables into arry
