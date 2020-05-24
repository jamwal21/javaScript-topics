function Counter(){
    var counter=0;
    return {
        increase: function(increment)  { counter+=increment; },

        decrease: function(decrement)  { counter-=decrement;   },

        display: function() {  return "Counter is at "+ counter; }      
    }
}
var calculate=Counter();
console.log(calculate.display());
calculate.increase(2);
calculate.increase(2);
calculate.increase(2);
console.log(calculate.display());
calculate.decrease(2);
console.log(calculate.display());
