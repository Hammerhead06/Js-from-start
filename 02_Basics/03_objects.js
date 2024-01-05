// singleton
//Object.create

//object literals

const mySym=Symbol("hero") 
const JsUser={
    name:"Roshan",
    [mySym]:"hero",
    "full name":"Roshan Kumar",
    age:19,
    location:"Singapore",
    lastLogin:["Monday","Saturday"]
}

console.log(JsUser.location);  //ye method ok hai, prr kuchh khamia hain
console.log(JsUser["full name"]); 

console.log(JsUser[mySym]);

JsUser.age=20  //change the data in object

// Object.freeze(JsUser);/ // freeze kr dia ab change nhi hoga data in object

JsUser.greeting=function()
{
    console.log("hello g, kya haal hai!");
}
JsUser.greeting2=function()
{
    console.log(`Hello,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());



