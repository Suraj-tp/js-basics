var arr=[1,12,4,14,0,4,0,5,0,8,0]


var n=arr.length;
var count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        arr[count]=arr[i]
        count++
    }
}
while(count<n){
    arr[count]=0;
    count++;
}
console.log(arr);


for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]!=0 && arr[i]!=0){
            if (arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }


        }
        else{
            break
        }

    }
}
console.log(arr);

