setTimeout(()=>{
    console.log("line1");
},0)

console.log("line 2");

setTimeout(()=>{
    console.log("line3");
},3000)

setTimeout(()=>{
    console.log("line4");
},3000)

// line 2
// line 1
// line 4
// line 3
