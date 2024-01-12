// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) +1;
//         if (internetSpeed >4) {
//             resolve("Success: data was saved")
//         }else{
//             reject("Failure: weak connection");
//         }
//     });
// };

// savetoDb("hii")
// .then((result)=>{
//     console.log("data 1 saved");
//     console.log(result);
//     return savetoDb("hello")
// })
// .then((result)=>{
//     console.log("data 2 saved" );
//     console.log(result);
//     return savetoDb("hello hii")

// })
// .then((result)=>{
//     console.log("data 3 saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise rejected");
//     console.log(error);
// })

// // async await
// async function saveData(){
//     try{
//         let result1 = await savetoDb("hii");
//         console.log("data 1 saved");
//         console.log(result1);
//         let result2 = await savetoDb("hello");
//         console.log("data 2 saved");
//         console.log(result2);
//         let result3 = await savetoDb("hello hii");
//         console.log("data 3 saved");
//         console.log(result3);
//     }catch(error){
//         console.log("promise rejected");
//         console.log(error);
//     }
// }

// saveData();

let h1 = document.createElement("h1");
h1.innerText = "hello world";
document.body.appendChild(h1);

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if(num > 3){
        reject("Promise rejected");
      }
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// async await
async function demo(){
  try{
    
    await changeColor("red", 2000);
    await changeColor("blue", 2000);
    await changeColor("purple", 2000);
    await changeColor("yellow", 2000);
  }catch (err){
    console.log(err);
    console.log("error found");
  }

  let a = "next line"
  console.log(a);
}



// then and catch
// changeColor("red", 2000)
// .then((result)=>{
//     console.log(result);
//     console.log("color changed to red");
//     return changeColor("green", 2000);
// })
// .then((result) => {
//     console.log(result);
//     console.log("color changed to green");
//     return changeColor("blue", 2000);
// })
// .then((result) => {
//     console.log(result);
//     console.log("color changed to pink");
//     return changeColor("pink", 1000);
// })
// .then((result) => {
//     console.log(result);
//     console.log("color chnaged to green");
//     return changeColor("green", 1000)
// })
// .catch((error) => {
//     console.log(error);
//     console.log("failed to change");
// })