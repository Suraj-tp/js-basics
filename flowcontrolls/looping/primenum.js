var num=8;
var flag=0;
for(let i=2;i<num;i++){ //i=2 3 4
   if(num %i==0){//8%2==0
       flag=1;
       break

   }
}
console.log(flag==0 ?"prime" :"not prime");

//q1 print multiplication table of 5 from 1 to 15
// o/p 1*5=5
//     2*5=10



// 15*5=75


// q2

// 2 =>2+22=>24
// 3 =>3+33+333=>369
// 4 =>4+44+444+4444=>4396


// while and for
// nested loop
// for 

// 7
// 10 - 50




// for(let i=1;i<=50;i++){
//     if(i==25){
//         break
//     }
//     console.log(i);
// }

// var num=5;

// for(let i=1;i<=15;i++ ){
//     console.log(`${i} * ${num}=${i*num}`);
// }



var num=4;


// 2 22
// 3 33 333
var str="";
var sum=0;
for(let i=1;i<=num;i++){ //i=1 1<=3 i=2 2<=3 i=3 3<=3
    str+=num//str="3"+3="33"+3

    sum=sum+Number(str)
}

console.log(sum);




