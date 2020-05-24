// Closures implemented using IIFE is called Module Pattern.It used to export only 
// certain things and rest you can HIDE(Private).
// The Module Pattern is one of the most common design
// patterns used in JavaScript and for good reason. The
// module pattern is easy to use and creates encapsulation of
// our code. 

//Shopping cart created using Module Pattern

console.log("You can add the following items in the cart:");
console.log("apple:Rs70\n soap:Rs10\n fogg:Rs100");
var s_cart=(function(){
    var basket=[]; //private variable
   
    //private functions
    function addition(name) {basket.push(name); console.log("your shopping cart items:"+basket);}
    function Delete() {return basket.pop();}
    
    return {
        add: function(name){ addition(name); }, //public methods
        remove: function(){  return Delete();  },
        display: function()
        { 
            var calc=0;
            for(var i=0;i<basket.length;i++)
            {
                if(basket[i]==='apple')
                {
                    calc+=70;
                }
                else if(basket[i]==='soap')
                {
                    calc+=10;
                }
                else if(basket[i]==='fogg')
                {
                    calc+=100;
                }
            } 
            console.log("Total value of your shopping cart items is:Rs"+calc);
         }
    };
    }()); 
    s_cart.add('apple');
    s_cart.display();
    s_cart.add('fogg');
    s_cart.display();
    s_cart.add('soap');
    s_cart.display();
    console.log("Item removed",s_cart.remove());
    s_cart.display();

   