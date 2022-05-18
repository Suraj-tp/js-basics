// var emp=[
//     ["ram",3],
//     ["ajay",4],
//     ["akhil",1],
//     ["ajay",2],
//     ["arun",5],
//     ["sam",6]
// ]
// emp.sort((e1,e2)=>e2[1]-e1[1])
// console.log(emp[0]);

// var wc=[
//     ["a",3],
//     ["b",2],
//     ["c",4],
//     ["d",5],
// ]

// wc.sort((a1,a2)=>a2[1]-a1[1])
// console.log(wc[0]);

var out={ A: 3, B: 2, C: 3, D: 1, E: 1 }
console.log(Object.entries(out).sort((a1,a2)=>a2[1]-a1[1])[0]);