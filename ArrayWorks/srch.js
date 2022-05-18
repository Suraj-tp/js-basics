var arr=[12,13,14,20,21,22]


var element=17,flag=0;
var low=0,upp=arr.length-1;
var cnt=1;
while(low<upp){
    let mid=Math.floor((low+upp)/2)
    if(element >arr[mid]){
        low=mid+1

    }
    else if(element <arr[mid]){
        upp=mid-1;

    }
    else if(element==arr[mid]){
        flag=1;
        break
    }
    cnt++;
}

console.log(flag==0?"nf":"found");
console.log("count",cnt);

