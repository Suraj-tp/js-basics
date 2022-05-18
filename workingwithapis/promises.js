// promise
// resolve,reject


// var mypromise=new Promise((res,rej)=>{
//     let watchTime=Math.floor(Math.random()*10)
//     if(watchTime > 3){
//         res("you are ready")
//     }
// })


// mypromise.then(msg=>console.log(msg))


var myjspromise=new Promise((res,rej)=>{
    let rating=Math.floor(Math.random()*10)
    if(rating >5){
        res("here to gooooo")
    }
})

myjspromise.then(msg=>console.log("lets start angular"))