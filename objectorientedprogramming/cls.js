// class plan,design pattern.blueprint

// object bulding

class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;

    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
}

var p=new Person("ram",25,"male")
p.printPerson()



// var form=document.querySelector("#eform")
// var btn=document.querySelector("#id_btn")
// btn.addEventListener("click",createEmp())

// function createEmp(){
//     var obj=new Person("ram",29,"male")

//     // store into databse 


// }

// constructor=> initializing instance variables
// constructor always same as class name in c++ and java in js constructor name always constructor