// var names = new Array("5", "3", "2","Kishore", "Adarsh", "Shashi", "Shakthi");
// console.log(names)
// var name = names.join(",")
// console.log(name)
// var name = names.sort()
// console.log(name)
// var name = names.concat("++")

// var a = [1,2,8,6,7,1]
// console.log(a)
// var b = a.slice(-4, -1)
// console.log(b)

// var b = a.splice(1,4)
// var b = a.splice(2,0,"a","b")
// console.log(b)
// var b = a.splice(2,2,[1,2],3)
// console.log(a)

// var b = a.push(4)
// var b = a.unshift(1)
// let a = []
// var b = a.unshift(1)
// console.log(b)
// console.log(a)
// var c = a.unshift(5,6,7)
// console.log(a)
// let d = a.shift()
// console.log(a)
// let str = ["f","j",1,5]
// let e = str.toLocaleString()
// console.log(`newStr is: ${e}`)

// console.log("Hello")

        // Loopwith Array
        // let array = document.querySelector(".array")
        // let newarray = document.querySelector(".newarray")
        // let fruits = ["mango", "apple", "banana", "litchi", "orange"];
        // array.innerHTML = `Array: ${fruits}`
        // fruits.push("pineapple") //add ele at the end
        // fruits.unshift("orange") //add ele at the start
        // fruits.shift() //remove ele from start
        // fruits.pop() //remove ele from end
        // for (let i = 0; i < fruits.length; i++) { // retreve ell element from array
        //     const element = fruits[i];
        //     console.log(i, element);
        // newarray.innerHTML = `Array: ${fruits}`
        // }

        //reverse array with loop
        // for (let i = fruits.length-1; i >= 0; i--) {
        //     const element = fruits[i];
        //     console.log(i, element);
        // }


        // Nested array with loop

        // let heroes = [
        //     ["ironman", "spiderman", "thor"],
        //     ["superman", "wonder woman", "flash", "hulk"]
        // ];

        // array.innerHTML = `Nested Array: ${heroes}`
        
        // for (let i = 0; i < heroes.length; i++) {
        //     console.log(i, heroes[i], heroes[i].length);
        //     for (let j = 0; j < heroes[i].length; j++) {
        //         console.log(`j=${j}, ${heroes[i][j]}`);
        //     }
        // }

        // let student = [
        //     ["amana", 95],
        //     ["shradha", 94.4],
        //     ["karan", 100]
        // ]

        // for(let i = 0; i<student.length; i++){
        //     console.log(`info of student #${i}`)
        //     for(let j = 0; j<student[i].length; j++){
        //         console.log(`${student[i][j]} `)
        //     }
        // }

        // for of || nested for of
        // let fruits = ["mango", "apple", "banana", "litchi", "orange"];
        
        // for (fruit of fruits) {
        //     console.log(fruit);
        // }

        // let heroes = [
        //     ["ironman", "spiderman", "thor"],
        //     ["superman", "wonder woman", "flash", "hulk"]
        // ];
            // nested for of
            for(list of heroes){
                for(name of list){
                    console.log(name);
                }
            }