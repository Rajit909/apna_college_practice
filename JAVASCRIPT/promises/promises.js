function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) +1;
        if (internetSpeed >4) {
            resolve("Success: data was saved")
        }else{
            reject("Failure: weak connection");
        }
    });
};


savetoDb("hii")
.then(()=>{
    console.log("data 1 saved");
    return savetoDb("hello")
})
.then(()=>{
    console.log("data 2 saved");
    return savetoDb("hello hii")

})
.then(()=>{
    console.log("data 3 saved");
})
.catch(()=>{
    console.log("promise rejected");
})