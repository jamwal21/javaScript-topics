function createBase(num1)
{
    return function(num2)
    {
        console.log(num1+num2);
    }
}
var addSix=createBase(6);
addSix(10);
addSix(21);