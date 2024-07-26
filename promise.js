const willCleanTheRoom = new Promise((resolve,reject)=>{
    //do what you told
    setTimeout(()=>{
        let cleanRoom = true;
        if(cleanRoom){
            resolve('cleaned the room');
            }else{
                reject('did not clean the room');
                }
                },2000);
});

willCleanTheRoom.then((resolveStatus) => {
    console.log(resolveStatus);
});

