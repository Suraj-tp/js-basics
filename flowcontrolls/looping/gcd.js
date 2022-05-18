var num1=12,num2=24;

var i=1;
var gcd=1;
var low= num1<num2 ? num1:num2
while(i<=low){ //i=1,,,,,,,,,12 2<=12 13<=12
    if(num1 %i==0 && num2 %i==0 ){ //122%2==0 && 24%2==0
        gcd=i//gcd=12
    }
    i++;//13

}

console.log(gcd);

