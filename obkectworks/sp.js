// function add(n1,n2){
//     console.log("here");
//     return n1+n2
// }

// function add(n1,n2,n3){
//     console.log("hereeeeeeeeeeeeeeeee");
//     return n1+n2+n3
// }

// console.log(add(10,20));

function add(...items){
    return items.reduce((n1,n2)=>n1+n2)
}

console.log(add(10,20));
console.log(add(10,11,12,13));


function findMax(...items){
    return items.reduce((n1,n2)=>n1>n2?n1:n2)
}

console.log(findMax(10,11,3,30));