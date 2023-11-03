let myDate=new Date(); //date =>object hai
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let newdate=new Date(2023,10,3); //(year,month-1,date)
console.log(newdate.toLocaleString());

let newdate2=new Date("11-01-2200");
console.log(newdate2.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);   //ye ans dega in milliseconds

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
