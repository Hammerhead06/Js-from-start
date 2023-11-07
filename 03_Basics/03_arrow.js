const user={
    username:"roshan",
    price:999,

    WelcomeMessage:function(){
        console.log(`${this.username}, Welcome to the website.`);
    }

}
user.WelcomeMessage();
user.username="Sam";
user.WelcomeMessage();

// const chai=function(){
//     let username="rohan";
//     console.log(this.username);
// }

const chai=()=>{
    let username="pj";
    console.log(this)
}
chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// const addTwo=(num1,num2)=>num1+num2

// const addTwo=(num1,num2)=>(num1+num2);

// Inn tino function ka mtlb same hai
