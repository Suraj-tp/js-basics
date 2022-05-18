class Employee{
    
    setEmp(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary
    }
    printEmp(){
        console.log(this.eid,this.ename,this.desig,this.salary);
    }
}

var emp1=new Employee()
emp1.setEmp(1000,"nikil","hr",2500)
emp1.printEmp()

// this.  instance variables 
