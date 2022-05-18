var num=121
var inp=num;
var res=""

while(num !=0){
    let lastDigit=num%10
    res=res+lastDigit
    num=Math.floor((num/10))
}



// condition ? truestmt : falsestmt
console.log(inp==res ? "palindrome" : "not palindrome");

// 123 => 1**3+2**+3**3=1+8+27=36

// var num=10;

// console.log(num > 0 ? "+ve" : "-ve");