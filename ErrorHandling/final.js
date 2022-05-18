var expr="%2+3+4*6"

try{
    console.log(eval(expr));
}
catch(e){
    expr="%2+3*4+5";
    try{
        console.log(eval(expr));

    }
    catch(e){
        expr="%2+3*4+5";
        console.log(eval(expr));
    }
   
}
finally{
console.log("stmt1");
console.log("stmt2");
}

// try catch throw finally
