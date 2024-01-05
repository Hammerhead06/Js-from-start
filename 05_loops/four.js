// for each loop kuchh return nhi krta, only good in printing

// so , we use filter

const arr=[5,6,9,3,6,8];
const new_arr=arr.filter((val)=>{return val>5;});
console.log(new_arr);

//ye kaam tum for each se bhi kr skte ho, dono sahi hai
const arr2=[];
arr.forEach((i)=>{
    if(i>5){
        arr2.push(i);
    }
})
console.log(arr2);
