//// const tindeUser=new Object()   it declare a singleton object

const tinderUser={}
tinderUser.id="123"
tinderUser.name="Sam"
tinderUser.isLoggedIN=false

// object nesting
const regularUser={
    emali:"some@google.com",
    fullname:{
        firstname:"roshan",
        lastname:"kumar"
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.firstname)


//Merge objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}

//best used
const obj4={...obj1,...obj2};
console.log(obj3);
console.log(obj4);

//keys nikal skte ho objects se
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
