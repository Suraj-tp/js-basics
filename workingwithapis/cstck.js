function one(){
    console.log("in fn one");
}

function two(){
    one()
}

function three(){
    two()
}

three()

// in fn one