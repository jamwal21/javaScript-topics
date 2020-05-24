// We can see that this is much cleaner and easier to understand than the previous callback example.

let getData=function(message){
    return new Promise(function(resolve,reject){
        resolve("abhinav is saying "+message+"! You want more?");
    });
}
let getMoreData=function(message){
    return new Promise(function(resolve,reject){
        resolve("Rahul is saying "+message+"! You want more??");
    });
}
let getSomeMoreData=function(message){
    return new Promise(function(resolve,reject){
        resolve("Gagan is saying "+message+"! You want more??");
    });
}
let get_SomeMore=function(message){
    return new Promise(function(resolve,reject){
        resolve("Nirmal is saying "+message+"! GOODBYE!!!");
    });
}
getData("Hi").then(function(fromResolve1){
    console.log(fromResolve1);
    return getMoreData("Hello");
}).then(function(fromResolve2){
    console.log(fromResolve2);
    return getSomeMoreData("Kidaan");
}).then(function(fromResolve3){
    console.log(fromResolve3);
    return get_SomeMore("Chad di kala");
}).then(function(fromResolve4){
    console.log(fromResolve4);
});


// It takes an array as an input.Promise.all() waits for all promises to succeed and fails if any 
// of the promises in the array fails.
// All the promises run simultaneously .they don’t have to wait for the previous one to finish


// Promise.all([getData("Hi"),getMoreData("Hello"),
// getSomeMoreData("Kidaan"),get_SomeMore("Chad di kala")
// ]).then(function(messages){
//     console.log(messages);
// });
