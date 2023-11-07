function sayMyName()
{
    console.log("R");
    console.log("O");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}
// sayMyName()
function add2Num(num1,num2)
{
   let result=num1+num2;
   return result;
}
const ans=add2Num(3,5);
console.log(ans);




function calculateCartPrice(...num1)    //...num1 =>ye hota hai rest operator
{
    return num1;   //ye array return krega saare elements ka
}

//function me object
anyobject={
    username:"roshan",
    salary:10000000
}
function handleobject(emp){
    console.log(`Username:${emp.username} and his sallary is:${emp.salary}`)
}
handleobject(anyobject);
handleobject({
    username:"sam",
    salary:15000000
})

