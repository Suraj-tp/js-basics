var arr=[2,3,4,5]
arr.sort((n1,n2)=>n1-n2)
var inp=7;
var cnt=1;
var low=0,upp=arr.length-1;
while(low<upp){
    let curSum=arr[low]+arr[upp]
    if(curSum<inp){
        low+=1;
    }
    else if(curSum > inp){
        upp-=1;

    }
    else if(curSum==inp){
        console.log(`pairs ${arr[low]},${arr[upp]}`);
        low++
    }
    cnt++;
}

console.log("execution count",cnt);