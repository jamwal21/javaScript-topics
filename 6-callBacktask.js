// ### Challenge `processLength`
// * Implement a higher-order function called `processLength`.
//  * It takes two arguments:
//  * @param list an array with elements of any type.
//  * @param callback function that takes a number as its argument.
//  * @returns the result of invoking `callback` passing the LENGTH of `list`.

var a=[1,"rahul",3,3,6545,"gagan"];
function processLength(aray,res)
{
    var c=aray.length;
    res(c);
}
function callback(num)
{
    console.log("Length of the array is: "+num);
}
processLength(a,callback);

// * ### Challenge `processLastItem`
// * @instructions
// * Implement a higher-order function called `processLastItem`.
//  * It takes two arguments:
//  * @param stringList array of strings.
//  * @param callback function that takes a string as its argument.
//  * @returns the result of invoking `callback` with the LAST element in `stringList`.

var a=["rahul","deepak","negi","gagan"];
function processLastItem(aray,res)
{
    var c=aray.length;
    var b=aray[c-1];
    res(b);
}
function callback(str)
{
    console.log("Last element of the array is: "+str);
}
processLastItem(a,callback);
    
// * ### Challenge `processSum`
// * @instructions
// * Implement a higher-order function called `processSum`.
//  * It takes two arguments:
//  * @param numberList array of numbers.
// * @param callback function that takes a number as its argument.
// * @returns the result of invoking `callback` passing the SUM of all elements in `numberList`.

var numberList=[32,323,24,5,65];
function processSum(aray,res)
{
    var d=0;
    for(var i=0;i<aray.length;i++)
    {
        
            d+=aray[i];
    }
    res(d);
}
function callback(sum)
{
    console.log("Sum of all the elements of the array is: "+sum);
}
processSum(numberList,callback);

// @instructions
// * Implement a higher-order function called `processProduct`.
//  * It takes three arguments:
//  * @param num1 a number.
//  * @param num2 a number.
//  * @param callback function that takes a number as its argument.
//  * @returns the result of invoking `callback` passing the PRODUCT of `num1` and `num2`.

function processProduct(num1,num2,res)
{
    var d=num1*num2;
    res(d);
}
function callback(product)
{
    console.log("Product of two numbers is: "+product);
}
processProduct(25,25,callback);

// @instructions
// * Implement a higher-order function called `processContains`.
//  * It takes three arguments:
//  * @param item of any kind.
//  * @param list array of elements of any kind.
//  * @param callback function that takes a boolean as its argument.
//  * @returns the result of invoking `callback` passing true if `item` exists in `list`, false otherwise.

var List=[32,323,"rahul","gagan",65,"abhinav"];
function processContains(anyItem,aray,boolres)
{
    for(var i=0;i<aray.length;i++)
    {
        if(anyItem===aray[i])
        { var g=true; break; }
         g=false;
    }
    boolres(g);
}
function callback(bool)
{
    if(bool==true)
    console.log("Item exists in the array");
    else
    console.log("Item doesn't exist in the array");
}
processContains('rahul',List,callback);