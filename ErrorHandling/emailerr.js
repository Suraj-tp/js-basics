var email="abc@gmai"
try{

if(!(email.endsWith("@gmail.com"))){
    throw new Error("invalid email")
}
}
catch(e){
    console.log(e.message);
}


