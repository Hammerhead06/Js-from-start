const name="roshan";
const rep=12;

// This kind of code is more readable =>modern way 
console.log(`Hello everyone, my name is ${name} and my repo count is ${rep}`);

// String is an object and it has various prototypes which contains tons of functions
const game=new String('roshanhere');
console.log(game.length);
console.log(game.toUpperCase());  // pr isne hamaare original string ko change nhi kiya, iske pas copy hai uski
console.log(game.charAt(2)); 
console.log(game.indexOf('k'));

const newStr=game.substring(0,4)
console.log(newStr);

const newstrone="       ankesh          ";
console.log(newstrone)
console.log(newstrone.trim());

const url="https://roshan.com/roshan%20kumar";
console.log(url.replace('%20','-'));

console.log(url.includes('kumar'));

const pp="rosh-ank-sanj" //agr mughe pp ko store krna array me '-' matlb agla 
//use split
console.log(pp.split('-'));