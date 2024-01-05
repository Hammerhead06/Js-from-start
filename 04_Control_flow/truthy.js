const email=""
if(email) console.log("have email")
else console.log("don't have email");

// falsy values

// false, 0 -0,BigInt 0n,"",null,undefined,NaN

// some surprising truthy values

// "0","false"," ",[],{},function(){}

//Array ko check krne ke liye uski length ka use kro

// for objects
const obj={}
if(Object.keys(obj).length===0) console.log("empty object");

// **Nullish coalescing operator (??)** : null , undefined
let val1;
val1=5??10;
val1=null??10;
val1=undefined??15;
val1=null??10??20 //yaha pe jo first aaya, wahi assign ho jaega
 
