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
