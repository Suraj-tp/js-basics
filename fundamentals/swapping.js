var num1=10,num2=20;
console.log(`values b4 swapping num1=${num1} num2=${num2}`);
// logic
// num2=num1;//num2=10
// num1=num2;//num1=10

// logic 1
// num1=num1+num2; //num1=10+20=30
// num2=num1-num2; //num2=30-20=10
// num1=num1-num2; //num1=30-10=20 

// logic 2

var temp=num1; //temp=10
num1=num2; //num1=20
num2=temp;

console.log(`values after swapping num1=${num1} num2=${num2}`);

