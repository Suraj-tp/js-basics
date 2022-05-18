var arr=[3,4,5]
// op=[9,8,7]
var total=0;
var op=[]
for(let n of arr){
    total+=n
}
for(let n of arr){
    op.push((total-n))
}
console.log(op);

// q2 arr1=[10,0,8,7,9,0,2,0]

// op=[2,7,8,9,10,0,0,0]

// sample inp
//  arr=[4,0,10,0,13,0,2,0]
// op=[2,4,10,13,0,0,0,0]

