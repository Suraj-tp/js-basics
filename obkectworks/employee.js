var employee={
    eid:1000,
    ename:"hari",
    desig:"devop",
    salary:25000,
    exp:2
}



// chk exp prop is present if false add exp :1 else add current value of exp +1

if("exp" in employee){
    employee.exp+=1;

}
else{
        employee.exp=1
}

console.log(employee);