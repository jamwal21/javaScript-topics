// Use your knowledge gained so far and do the following 
// Create a Animal Object ( using Function Constructor) . Inherit two types of cat from animal
//  (Big cat and small Cat) . Implement Walk , talk and type methods. 
//  Type will be common to all objects and give the same output. 
//  Walk and talk mentors should be speciﬁc to the two inherited objects Big Cat and Small Cat .  

function Animal(walkstyle,talkstyle)
{
    this.Walk=walkstyle,
    this.Talk=talkstyle
}
Animal.prototype.walk=function(){
    console.log("This cat walks "+this.Walk);
}
Animal.prototype.talk=function(){
    console.log("This cat talks in "+this.Talk);
}
Animal.prototype.type=function(){
        console.log("All have same type");
    }
let bigCat=new Animal('straight','hindi');
let smallCat=new Animal('zig-zag','urdu');
bigCat.walk();
bigCat.talk();
bigCat.type();
smallCat.walk();
smallCat.talk();
smallCat.type();
