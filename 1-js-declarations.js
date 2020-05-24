//variable declaration moves first or function declaration??
alert(abc);

var abc=10;
function abc(){console.log("Function declaration gets hoisted first");}
alert("Variable declaration gets hoisted after F.declaration");
alert(abc);



//Variable Declared in Both Local Function and Global scope
var b=10;        //global variable
console.log(b); //10
function func()
{
    var b=700;    //local function variable.Its name is same as global variable but both are different.
    console.log(b); //100
}
func();
console.log(b); //10



//Variable declared without the var keyword
a=10;    //global variable
console.log(a); //10
function zz()
{
    b=30;    //variable declared without using var,let,const automatically beacomes global
    console.log(b); //30
}
zz();
console.log(b); //30
