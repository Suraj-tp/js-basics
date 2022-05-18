var accounts = [
  {
    acno: 1000,
    type: "saving",
    balance: 5000,
    password: "abc123",
    transactions: {
      creditTransactions: [
        { from: 1002, amount: 1000 },
        { from: 1003, amount: 2000 },
      ],
      debitTransactions: [
        { to: 1002, amount: 1000 },
        { to: 1003, amount: 2000 },
      ],
    },
  },
  {
    acno: 1001,
    type: "current",
    balance: 6000,
    password: "Password@123",
    transactions: {
      creditTransactions: [
        { from: 1002, amount: 1000 },
        { from: 1003, amount: 2000 },
      ],
      debitTransactions: [
        { to: 1002, amount: 1000 },
        { to: 1003, amount: 2000 },
      ],
    },
  },
  {
    acno: 1002,
    type: "saving",
    balance: 15000,
    password: "user123",
    transactions: {
      creditTransactions: [
        { from: 1001, amount: 1000 },
        { from: 1003, amount: 2000 },
      ],
      debitTransactions: [
        { to: 1000, amount: 1000 },
        { to: 1003, amount: 2000 },
      ],
    },
  },
];
var session={}
// user:1000
function validateAccountNumber(acno){
    // return value true or false //find includes some
    return accounts.some(ac=>ac.acno==acno)
}

function getDataByAcno(acno){
   return accounts.find(data=>data.acno==acno)
}

function getBalance(acno){
    return accounts.find(data=>data.acno==acno).balance
}


function getLastTransaction(acno){
    let allDebitTransactions=accounts.find(data=>data.acno==acno).transactions.debitTransactions
    console.log(allDebitTransactions[allDebitTransactions.length-1]);
}


getLastTransaction(1001)

// validateAccountNumber(1002)
// getDataByAcno(1000)

function authenticate(acno,password){
    if(validateAccountNumber(acno)){
        let data=getDataByAcno(acno)
        if(data.password==password){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}



function login(acno,password){
    if(authenticate(acno,password)){
        session.user=acno
    }
    else{
        console.log("invalid user credentials");
    }
}

function loginRquired(){
    return "user" in session ? true :false
}


function balanceEnquiry(){
    if(loginRquired()){
        let logedUser=session.user;
        return getBalance(logedUser);
    }
    else{
        return "invalid user"
    }
}



function fundTransfer(toAcno,amount){
  if(loginRquired()){
    // chk toacno exists
    if(validateAccountNumber(toAcno)){

        let curBalance=balanceEnquiry()//fetch the current balance of logged user

        if(amount>curBalance){//
          console.log("insufficient balance");
        }
        else{
          let loggedUser=session.user;
          let payeedeatail=getDataByAcno(loggedUser)
          let recepientDetails=getDataByAcno(toAcno)
          payeedeatail.balance-=amount;
          recepientDetails.balance+=amount
          let debitTran={to:toAcno,amount:amount}
          payeedeatail.transactions.debitTransactions.push(debitTran)
          let creditTran={from:loggedUser,amount:amount}
          recepientDetails.transactions.creditTransactions.push(creditTran)

            // payeedeatail
            // recepient

        }
    }
    else{
      console.log("invalid to acno");
    }
    // chk sufficient balance in logged user 
  }
  else{
    console.log("u must login");
  }
}
function paymentHistory(){
  if(loginRquired()){
      let loggedUser=session.user
      let data=getDataByAcno(loggedUser)
      console.log("debit transaction");
      console.log(data.transactions.debitTransactions);
      console.log("credit transactions");
      console.log(data.transactions.creditTransactions);

  }
  else{
    console.log("u must login");
  }
}


function logOut(){
  if(loginRquired()){
    delete session.user

  }
  else{
    console.log("u must login");
  }
  
}

login(1000,"abc123")

console.log(balanceEnquiry());
logOut()
console.log(balanceEnquiry());
