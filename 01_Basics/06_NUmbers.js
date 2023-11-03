const score =300;

const balance=new Number(300)
//dono me difference samgho
console.log(score)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))  //used to fixed the decimal places

const otherNum=123.988484
console.log(otherNum.toPrecision(4)); //4 digits hi honge num me (roundoff kr dega)

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));  //INDIAN SYSTEM me comma laga dega

// ********************Maths****************************
//  console.log(Math) // Math ek object hai aur iske bahut saare properties hain
//  console.log(Math.abs(-5)) 
//  console.log(Math.round(5.6)) 
//  console.log(Math.ceil(5.6)) 
//  console.log(Math.floor(5.6)) 
//  console.log(Math.sqrt(25)) 
//  console.log(Math.min(4,6,25,6))

 //most used 
 console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20 ;

// random number in between
console.log(Math.floor((Math.random()*(max-min)+1))+min)