const marvel=["thor","Ironman","Spiderman"]
const dc=["Superman","Batman","Wonder Woman"]

// marvel.push(dc);
// console.log(marvel);  //marvel me dc push ho jaega as an element
// console.log(`Third element:${marvel[3]}`);

const all_heros=marvel.concat(dc);   //ye 2nd array ke element ko one by one add kr deta ek naya array return krta hai

console.log(all_heros);

// Better way to do this is : "SPREAD"
const all_new_heros=[...marvel,...dc];
console.log(all_new_heros);

//agr array ke andr array ho,aur uss array ke andr array ho aur uske andr..
//unko "FLAT" ki help se normal ek array me daal skte hain
const another_arr=[1,2,3,[4,5,6],[7,8,[9,10]]]
const new_another_arr=another_arr.flat(Infinity);
console.log(new_another_arr);

console.log(Array.isArray("roshan"));
console.log(Array.from("Roshan"));  //ye array me convert kr dega

let 


