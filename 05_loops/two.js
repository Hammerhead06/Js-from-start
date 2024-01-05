const obj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in obj) {
//    console.log(key);  // line wise saare key print kr dega
//    console.log(obj[key]); //line wise saare values key ke acc print honge
   console.log(`keys => value:${key} => ${obj[key]}`);
}


// kya mai for in loop ka use array me kr skte hai?
// Ans. Ha, jarur pr wo bs index return krega normally way 

const arr=[7,5,3,8,4];
for (const key in arr) {
   console.log(key);  //ye bs index print krega
   console.log(arr[key]); //ye elements print krega
}

// for in can't be used in map, because maps doesnt have monotonic/itertable keys