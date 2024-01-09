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
.then((result)=>{
    console.log("data 1 saved");
    console.log(result);
    return savetoDb("hello")
})
.then((result)=>{
    console.log("data 2 saved");
    console.log(result);
    return savetoDb("hello hii")

})
.then((result)=>{
    console.log("data 3 saved");
    console.log(result);
})
.catch((error)=>{
    console.log("promise rejected");
    console.log(error);
})