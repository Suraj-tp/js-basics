var arr1=[10,11,12,17,20]
var arr2=[12,14,16,20,21]

// 12,17
var cnt=1;


for(let n1 of arr1){
    for(let n2 of arr2){
        if(n1==n2){
            console.log("common",n1);
        }
    }
}

