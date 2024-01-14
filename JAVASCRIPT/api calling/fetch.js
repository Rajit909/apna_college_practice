 let url = "https://catfact.ninja/fact"

async function getFact(){
    try{

        let res = await fetch(url);
        let data = await res.json();
        console.log("Data =", data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("Data2 =", data2.fact);
    }
    catch(err){
        console.log("Error ", err);
    }
}
getFact()

//  fetch with promises
//  fetch(url)
//  .then((res) => {
//     console.log(res);
//     return res.json();
//  }).
//  then((data) => {
//     console.log("data1 = ",data);
//     return fetch(url);
//  })
//  .then((res)=>{
//     return res.json();
//  })
//  .then((data2)=>{
//     console.log("data2 = ",data2);
//  })
//  .catch((err) =>{
//     console.log("Error -",err);
//  });

