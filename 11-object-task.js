const animal={                                      //object 1
    name:['dog','cat','lion'],                      //object 1 properties
     color:{                                        //object 2
            col1:'black',                           //object 2 properties
            col2:'white',
            beau: function(){ console.log(this.col2+" cats are beautiful"); },
            col3:'yellow',
            age:{                                   //object 3
                    age1:5,                         //object 3 properties                        
                    age2:3,
                    age3:11
                }
            },
    display:function(){
                        console.log("Different animals in the zoo are:"+animal.name);
                        console.log("color of "+animal.name[0]+" is "+animal.color.col1+
                        " and age is "+animal.color.age.age1);
                        console.log("color of "+animal.name[1]+" is "+animal.color.col2+
                        " and age is "+animal.color.age.age2);
                        console.log("color of "+animal.name[2]+" is "+animal.color.col3+
                        " and age is "+animal.color.age.age3);
                    }
    };
    animal.color.beau();
    animal.display();                  
    animal['dob']="2017,2018,2019";     //adding a new property to object  1 using square notation
    console.log(animal.dob);
    animal.color.col3='golden';         //modifying property 3 of object 2
    animal.change=function(){           //adding a new method named change in object 1
                            console.log("changed color of "+animal.name[2] + " is "+animal.color.col3);
                            }
    animal.change();
    let myKeyName="zoo";               //Dynamically adding a property
    let myKeyValue="Chandigarh";
    animal[myKeyName]=myKeyValue;
    console.log(animal.zoo);                  
