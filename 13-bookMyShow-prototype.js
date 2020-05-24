// knowledge of oojs gained so far you have to build a online movie ticket app, just like a bookmyshow
// define the enntities needed in the app as objects and and use prototype inheriteance to build the 
// app functionality.


var pvr={
    pm:function(){
      var d=prompt("How many tickets: ");
      var dd=parseInt(d);
      console.log("Price of silver ticket is:Rs100 & gold ticket is:Rs120");
      var e=prompt("Which ticket do you want: ");
      console.log("Your total tickets: "+dd+" and you chose "+e+" ticket");
      if(e=="silver")
      {
        var calc=dd*100;
        console.log("Your total booking amount: "+calc);
      }
      else
      {
      var calc=dd*120;
        console.log("Your total booking amount: "+calc);
      }  
    }
  };
  var cinepolis={
    cm:function(){
      var f=prompt("How many tickets: ");
      var ff=parseInt(f);
      console.log("Price of silver ticket is:Rs150 & gold ticket is:Rs180");
      var g=prompt("Which ticket do you want: ");
      console.log("Your total tickets: "+ff+" and you chose "+g+" ticket");
      if(g=="silver")
      {
        var calcc=ff*150;
        console.log("Your total booking amount: "+calcc);
      }
      else
      {
      var calcc=ff*180;
        console.log("Your total booking amount: "+calcc);
      }  
    }
  };
  var piccadilly={
      ppm:function(){
        var j=prompt("How many tickets: ");
        var jj=parseInt(j);
        console.log("Price of silver ticket is:Rs200 & gold ticket is:Rs400");
        var k=prompt("Which ticket do you want: ");
        console.log("Your total tickets: "+jj+" and you chose "+k+" ticket");
        if(k=="silver")
        {
          var cal=jj*200;
          console.log("Your total booking amount: "+cal);
        }
        else
        {
          var cal=jj*400;
          console.log("Your total booking amount: "+cal);
        }  
      }
    };
  function bookMyShow(pvvr,cine,pica)
  {
       this.a=prompt("Enter your name: ");
  console.log("Which movie you want to watch:\n1)avengers\n2)joker\n3)avatar");
   this.c=prompt("Enter name of the movie: ");
  console.log("List of available cinemas:\n1)cinepolis\n2)pvr\n3)piccadilly");
   this.b=prompt("Enter cinema name where you want to watch the film: ");
  console.log("Welcome "+this.a+" to "+this.b+" cinemas!");
      this.booking=function(){
     if(this.b=='pvr')
    { 
      pvvr.pm();
    }
    else if(this.b=='cinepolis')
    {
      cine.cm();
    }
    else
     pica.ppm();
  }
  }
  bookMyShow.prototype.ticket=function(){
    console.log('-------------------------------------------------');
    console.log("CONGRATULATIONS!!!\tYour booking is successful.");
    console.log(this.a+" your ticket is booked for the movie "+this.c+" at "+this.b);
  }
  var person1=new bookMyShow(pvr,cinepolis,piccadilly);
  person1.booking();
  person1.ticket();
  var person2=new bookMyShow(pvr,cinepolis,piccadilly);
  person2.booking();
  person2.ticket();
  var person3=new bookMyShow(pvr,cinepolis,piccadilly);
  person3.booking();
  person3.ticket();
  