class trainee_org{
    constructor(name){
       this.name=name;
   }      
}
class degree extends trainee_org{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
}
class performance extends degree{
    constructor(name,degree,grade){
        super(name,degree);
        this.grade=grade;
    }
}
class taskdone_onTime extends performance{
    constructor(name,degree,grade,yesORno){
        super(name,degree,grade);
        this.yesORno=yesORno;
    }
    report(){
        console.log(" trainee name :"+ this.name);
        console.log(" trainee degree :"+ this.degree);
        console.log(" trainee performance :"+ this.grade);
        console.log(" trainee task completion on time :"+ this.yesORno);
    }
}
const stu1=new taskdone_onTime("sunny negi","bca","a+","yes");
const stu2=new taskdone_onTime("gagan","b.tech","b+","yes");
const stu3=new taskdone_onTime("abhinav","bca","c+","no");
stu1.report();
console.log("\n");
stu2.report();
console.log("\n");
stu3.report();

