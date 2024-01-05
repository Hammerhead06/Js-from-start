//for
for(let i=0;i<10;i++) console.log(i);

//for of
const arr=[1,2,3,5,7,8]
for (const i of arr) {
    console.log(i);
}

const st="hello"
for (const it of st) {
    console.log(it);
}

//Maps
const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of India");

console.log(map);
// pura pura key and element print krna hai to
for (const x of map) {
    console.log(x);
}
// to print key and value separately

for (const [key,value] of map) {
    console.log(key);
    console.log(val);
    
}

// objects ke liye for in ka use krenge
// for in ka use aur bhi jagah hot hai