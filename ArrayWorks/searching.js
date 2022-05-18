//           j 
var arr=[2,3,4,5,2,3,10,11]



//         i  
var inp=100;
// o/p (5,3)
var cnt=1;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] + arr[j]==inp){
            console.log(`${arr[i]},${arr[j]}`);
        }
        cnt++;
    }
}
console.log(cnt);

// t1
// app1(2sec)  app2(5mnt)