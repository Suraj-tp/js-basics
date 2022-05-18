console.log("in line 1");

setTimeout(()=>{
    console.log("in line 2");
},2000
)
setTimeout(()=>{
    console.log("in line 1.x");
},0)
console.log("in line 3");



// line 1
// line 3
// 1.x
// line 2