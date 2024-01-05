// ***for each loop***
// for each ek property hota hai array ka, iska use bahut jagah hoga
// khaskar array of objects wagera kafi badhiya use hoga

const arr=["cpp","js","ruby","python"]
arr.forEach(function(item){console.log(item)});

// using arrow function
arr.forEach((i)=>{console.log(i)});

// using outer function   Atention!! function ka bs name likhna hai
arr.forEach(printing);

function printing(item){console.log(item)};

const arr_of_obj=[
    {
        langName:"javascript",
        shortname:"js"
    },
    {
        langName:"C plus plus",
        shortname:"cpp"
    }
]

arr_of_obj.forEach((i)=>{console.log(i.langName)});