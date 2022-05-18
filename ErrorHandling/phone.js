var phone="1234567b1a"
try{
    if(phone.length !=10 || (isNaN(phone))){
        throw new Error("invalid phone number")
    }
}
catch(e){
    console.log(e.message);
}