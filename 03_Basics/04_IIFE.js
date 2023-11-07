// IIFE = immediately invoked fucntion Expression
// global ke pollution se bachaata hai
// ()() componest in first one represent function and in 2nd one is call

(function chai(){
    console.log(`DB CONNECTED`)
})();

( ()=>{
    console.log(`DB AGAIN CONNECTED`)
})();

( (name)=>{
    console.log(`DB AGAIN CONNECTED,Mr.${name}`)
})('rakesh');
