var accounts=[
    [1000,"ram",25000,"savings",[
        [1002,"g-pay",400],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1001,"jhon",35000,"current",[
        [1000,"g-pay",500],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1002,"hari",55000,"savings",[
        [1000,"g-pay",1000],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1003,"anu",15000,"current",[
        [1002,"g-pay",400],
        [1001,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]]
 ]

//  print all transaction whose tamount > 400


var allTransactions=accounts.map(info=>info[4])
console.log(allTransactions.flat().filter(t=>t[2]>400));


// accounts.sort((d1,d2)=>d1[2]-d2[2])
// console.log(accounts);

// var gptransactions=accounts.map(data=>data[4]).flat().filter(t=>t[1]=="g-pay")
// console.log(gptransactions);
// accounts.filter(d=>d[4].flat().includes("g-pay")).forEach(d=>d[1])
// console.log(accounts.filter(a=>a[3]=="savings").length);

//q1 print total number of savings account

//q2 print all g-pay transactions


//q3 pritn all transactions where transaction amount > 400

//q4 sort accounts based on balance

//q5 print debit transactions of account number 1002

//q6 print all debit transactions of account number 1002 where transaction amount > 400
// console.log(accounts.find(data=>data[0]==1000));