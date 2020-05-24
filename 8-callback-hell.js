// CALLBACK HELL
// Seen the movie Inception? The movie talks about dreams within dreams within dreams, 
// each layer with its own scope but can affect the previous layer of dream - if there
//  is one. The worst scenario is that if you get lost, then you have no way of knowing 
//  where you are and where you came from.
// Replace dreams with JavaScript callbacks and you have the callback hell.

// Problems with Callbacks:
// 1)Callback Hell due to chaining.
// 2) each inner callback is dependent on its parent.
// 3) easy to break(due to error), and hard to debug.
// 4) highly coupled,not easily readable.


    function getData(say,callback)
    {
        callback("abhinav is saying "+say+"! You want more?");
    }	
    function getMoreData(say,callback)
    {
        callback("Rahul is saying "+say+"! You want more??");
    }
    function getSomeMoreData(say,callback)
    {
        callback("Gagan is saying "+say+"! You want more??");
    }
    function get_SomeMore(say,callback)
    {
        callback("Nirmal is saying "+say+"! GOODBYE!!!");
    }
    getData('Hi',function(result)
                    {
                        console.log(result);
                        getMoreData("Hello",function(res)
                        {
                            console.log(res);
                            getSomeMoreData("Kidaan",function(res)
                            {
                                    console.log(res);
                                    get_SomeMore("chad di kala",function(res){
                                        console.log(res);
                                    });
                            });
                        });  
                    });           

