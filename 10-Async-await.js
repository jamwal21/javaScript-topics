// Async  functions always return a Promise. If the function throws an error, 
// the Promise will be rejected. If the function returns a value, the Promise will be resolved.

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

async function data(){
    try{
        const fromResolve1 = await getData("Hi!");
        console.log(fromResolve1);

        const fromResolve2 = await getData("Hello!");
        console.log(fromResolve2);

        const fromResolve3 = await getData("Kidaan!");
        console.log(fromResolve3);

        const fromResolve4 = await getData("Chad di kala");
        console.log(fromResolve4);
    }
    catch(err){
        console.log(err);
    }
}
data();

//One more example----------------------------------------------------------------------------------------------------

function makeRequest(location){
    return new Promise(function(resolve,reject){
        console.log("making request to "+location);
        if(location==='google'){
            resolve('Google says Hi!');
        }
        else{
            reject('We can only talk to google');
        }
    });
}
function processRequest(response){
    return new Promise(function(resolve,reject){
        console.log("Processing response");
        resolve("Extra info "+response);
    });
}
async function doWork(){
    try{
     const response=await makeRequest('google');
     console.log("Response received");
     const processedResponse=await processRequest(response);
     console.log(processedResponse);
         }
    catch (err)
    {
         console.log(err);
    };
}     
doWork();


