//MINI CALCULATOR
console.log("What operation do you want to perform?");
console.log("1.Addition(+)\n2.Subtraction(-)\n3.Multiplication(*)\n4.Division(/)\n5.Percentage(%)");
var e=prompt("Enter the respective symbol given with the operation name: ");
console.log(e);
var a=prompt("Enter 1st number: ");
var b=parseInt(a);
console.log(b);
var c=prompt("Enter 2nd number: ");
var d=parseInt(c);
switch(e)
{
  case '+': console.log("Addition of "+b+" & "+d+" is: ",b+d);
  break;
  case '-': console.log("Subtraction of "+b+" & "+d+" is: ",b-d);
  break;
  case '*': console.log("Multiplication of "+b+" & "+d+" is: ",b*d);
  break;
  case '/':if(d==0){console.log("Undefined:Change the value of number(not 0)");}
  else
   console.log("Division of "+b+" & "+d+" is: ",b/d);
  break;
  case '%': console.log("Percentage of "+b+" & "+d+" is: "+(b/d)*100+"%");
  break;
  default:
  console.log("Please enter a available operation");
}