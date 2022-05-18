var employees=[
    [1002,"akhil",7000,"developer",2000,2010], //emp
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ravi",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// employees.forEach(e=>console.log(e))
employees.forEach(e=>console.log(e[1]))

// print details of employee with id of 1000
// var empData=employees.find(e=>e[0]==1000)
// console.log(empData);
// console.log(employees.find(e=>e[0]==1000));

// some()
// var isPresent=employees.some(e=>e[3]=="qa")
// console.log(isPresent);

// console.log(employees.some(e=>e[3]=="ba"));
// // is there any employee working with salary of 50000
// console.log(employees.some(e=>e[2]==50000));
// var highestpaidemp
// var highPaid=employees.reduce((e1,e2)=>e1[2]>e2[2]? e1:e2)
// console.log(highPaid);

// var mostExp=employees.map(e1=>e1[5]-e1[4]).reduce((e1,e2)=>e1>e2?e1:e2)
// console.log(mostExp);
// var emps=employees.filter(e=>(e[5]-e[4])==mostExp)
// console.log(emps);



// var ExperirncedEmp=employees.reduce((e1,e2)=>(e1[5]-e1[4])>(e2[5]-e2[4])?e1:e2)
// console.log(ExperirncedEmp);


// print employee details whose salary > 3000 and exp > 5
// var empdetails=employees.filter(e=>(e[2]>30000) && ((e[5]-e[4])> 5 ) )


// print employee names whose experice = 10 years
// console.log(employees.filter(e=>(e[5]-e[4])==10).map(e=>e[1]));

// print name of employees who are working as ba

//                   [1005,"tom",40000,"ba",1990,2015],
// var businessAnalystNames=employees.filter(e=>e[3]=="ba").map(e=>e[1])
// console.log(businessAnalystNames);

// console.log(employees.filter(e=>(e[5]-e[4])==5));

// print developers details
// var developers=employees.filter(e=>e[3]=="developer")
// console.log(developers);

// print employee details whose exp > 5



// var enames=employees.map(emp=>emp[1])
// console.log(enames);

// print salaries of all employee

// console.log(employees.map(e=>e[2]));
// print all employee names
// print all employees salary
// print all employees exp











// sort employees based on their exp

// employees.sort((e1,e2)=>(e2[5]-e2[4])-(e1[5]-e1[4]))
// console.log(employees);

// var deatil=[1007,"kiran",12000,"developer",2021,2022]
// employees.push(deatil)

// console.log(employees);

// console.log(employees);
// sort employees based on salary
// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees);


// for(let emp of employees){
//     if(emp[3]=="developer"){
//         console.log(emp[1]);
//     }
// }

// print employee name whose id=1000

// for(let emp of employees){
//     if(emp[0]==1000){
//         console.log(emp[1]);
//     }
// }

// print developers names 











// for(let emp of employees){
//     //emp= [1000,"ram",15000,"hr",1990,2000],
//     console.log(emp[5] - emp[4]);

// }
// print number of employee
// console.log(employees.length);

// print em[ployee names
// for(let emp of employees){
//     //emp=[1000,"ram",15000,"hr",1990,2000],
//     console.log(emp[1]);
// }

// print experience of all employees


// ipl2k_22=[
//     ["Kolkata Knight Riders", 5 ,3 ,2 ,0 ,0,6,+0.446]
//     ["Rajasthan Royals",4,3,1,0,0,6,+0.951],


// ]



// print total number of savings account

// print all g-pay transactions

// pritn all transactions where transaction amount > 400

// sort accounts based on balance

// print debit transactions of account number 1002

// print all debit transactions of account number 1002 where transaction amount > 400

