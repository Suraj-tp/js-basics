// var baleno={
//     brand:"nexa",
//     colors:["grey","blue","red","white"],
//     price:"10lac",
//     transmissions:["manuel","Auto"],
//     fuelTypes:["petrol","EV"],
//     breakes:"ABS",
//     getPrice(){
//         return this.price
//     }
// }


// var glanza={
//     brand:"toyotta",
//     price:"11lac",
//     getPrice(){
//         return this.price
//     }
// }
// glanza.__proto__=baleno
// console.log(baleno.getPrice());
// console.log(glanza.getPrice());




var parent={
    gold:"10kg",
    cash:50,
    groom:"gopal",
    mrg(){
        return (`mrg with ${this.groom} ****${this.cash}***${this.gold}`);
    }
}

var child={
    groom:"rahul"
}
child.__proto__=parent
child.mrg();
console.log(mrg());
