var pattern="AABABCCCDEC";

var wc={}
var recursiveChar=new Set()

for(let char of pattern){
    if(char in wc){
        recursiveChar.add(char)
        wc[char]+=1
    }
    else{
        wc[char]=1
    }
}

// console.log(wc);
// console.log([...recursiveChar][0]);
// console.log([...recursiveChar][1]);


console.log(Object.entries(wc).sort((a1,a2)=>a2[1]-a1[1])[0]);






