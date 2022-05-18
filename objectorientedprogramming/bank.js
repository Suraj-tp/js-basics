class Bank{
    bank_name="sbk"
    createAccount(acno,cst_name,phone,email){
        this.acno=acno;
        this.customerName=cst_name;
        this.phone=phone;
        this.email=email;
        this.bal=2000;
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your ${this.bank_name} has been credited with amount ${amount} aval bal ${this.bal}`);
    }
    withdraw(amount){
        if(this.bal > amount){
            this.bal-=amount;
            console.log(`your ${this.bank_name} has been debited with amount ${amount} aval bal ${this.bal}`);


        }
        else{
            console.log(`insufficuent bal  transaction cancelled`);
        }
    }
    balEnq(){
        console.log(`you aval bal ${this.bal}`);
    }
}

var b1=new Bank()
b1.createAccount(1000,"anuj",12345,"abc@gmail.com")
b1.deposit(10000)
b1.withdraw(2000)
b1.balEnq()
