// //Promises in javascript

// let learn_ds=new Promise(function(resolve,reject){
//  learned=true;
//  if(learned){
//      resolve("I learned data structures");
//  }

//  else{
//      reject("In pending");
//  }
// });
// learn_ds.then(function(data){
//     console.log("Yahoo"+data);
// });

// let done=learn_ds.then();
// console.log(done);


//Example 2
//I'm executing promises one by one i.e promise.then();
// In this i'm waiting for one to finish i.e i have dependency
//we can excecute all ata time by using promise.all();
//

let cleanroom=function(){
    return new Promise(function(resolve,reject){
        reject("error");
    })
};


let garbageclean=function(message){
    return new Promise(function(resolve,reject){
        resolve(message+" &  removed the grabage");
    })
};

let winIcecream=function(message){
    return new Promise(function(resolve,reject){
        resolve(message+"  I won IceCream");
    })
};

// //I'm running these one by one i.e one is dependent on another
// cleanroom().then(function(data){
//    return garbageclean(data);
// }).then(function(data){
//    return winIcecream(data);
// }).then(function(data){
//     console.log(data);
// })
// //I'm runnning these independently ex.i'm sending request to three different servers and waiting for data
// Promise.all([cleanroom(),garbageclean(),winIcecream()]).then(function(data){
//     console.log(data);
// });

//Now my requirement is if one the promise is finished then return data. i.e i;m sending request 
//to 3 different servers having the same data. if one of the servers resonds fast then just return the data.
//for proof set two promises to reject and first one to resolve
// Promise.race([cleanroom(),garbageclean(),winIcecream()]).then(function(data){
//     console.log(data);
// });

cleanroom().then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data)
});
