// NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed 
// as the first argument to the callback.
// DEFINING AN ERROR-FIRST CALLBACK
// There’s really only two rules for defining an error-first callback:
// 1.	The first argument of the callback is reserved for an error object. 
// If an error occurred, it will be returned by the first err argument.
// 2.	The second argument of the callback is reserved for any successful 
// response data. If no error occurred, err will be set to null and any successful 
// data will be returned in the second argument.


// Example: error first callback function

function strictAddition(x, y, callback) {
 if(typeof x !== 'number') {    callback( new Error('First argument is not a number') );    return;  }
if(typeof y !== 'number') {    callback( new Error('Second argument is not a number') );    return;  }
var result = x + y;  setTimeout(function() {    callback(null, result);  }, 500);
}
function callback(err, data) {  if(err) {    console.log(err);    return;  }  console.log(data);}
strictAddition(2,  10, callback);
strictAddition(-2, 10, callback);
strictAddition('uh oh', 10, callback);
strictAddition(2, '10', callback);


// MyExample:

function divide(x,y,callback)
{
    if(y==0)
    {
      return callback(new Error("Division not possible "));
    }
    var d=x/y;
    callback(null,d);
}
function res(err,result)
{    
    if(err)
    {
       return console.log(err);
    }
    else{
        console.log("result of the divison is: "+result);
    }
}
divide(35,5,res);

