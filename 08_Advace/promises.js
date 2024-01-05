const promisOne=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Asyn Task complete');
        resolve()
    }, 1000);
})
promisOne.then(function(){
    console.log("resolved");
})
// 2nd Promise
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Asyn task 2 complete")
        resolve();
    },1000);
}).then(()=>{
console.log('2nd resolved')
})

//3rd Promise

const promisthree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async 3 complete")
        resolve({name:"roshan",class:"A6"})
    },1000)
})
promisthree.then((x)=>{
    console.log(x);
})

// 4th promise

const promisefour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        console.log('Async 4 complete');
        if(!error){
            resolve({username:"roshan",password:"A6B6"})
        }
        else{
            reject("ERROR:Something went wrong.");
        }
    },1000)
})

promisefour.then((i)=>{
    //agr return wla statement hoga to use next then me lena hoga phir print kr skte hai
    return i.username;
}).then((j)=>{
    console.log(j);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally, the promise is resolved or rejected.");
})
// finally is used to inform whether the works has been done or not


// 5th promise