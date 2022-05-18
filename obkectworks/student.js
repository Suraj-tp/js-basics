// create an object student with prop rolno,name,course,

var student={
    rolno:1000,
    name:"rahul",
    course:"django",
    
}

// chk gender prop is present or not
console.log("gender" in student);
// add prop gender :male
student.gender="male"
console.table(student);

// add skills: css,html,bootstarp,js
student.skills=["css","html","bootsrap","js"]
console.log(student);

// add new skill angular
student.skills.push("angular")
console.log(student);
// chk for vaccinated pro is present if no set vaccinated : false
if( !("vaccinated" in student)){
    student.vaccinated="false"
}

console.log(student);