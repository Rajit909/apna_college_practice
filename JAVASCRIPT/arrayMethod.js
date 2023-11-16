// let arr = [
//     1,2,3,4,5
// ]

// Forech

// arr.forEach(
//     (el)=>{
//         console.log(el);
//     }
// )

// let students = [
//     {
//         name: "John",
//         marks: 95,
//     },
//     {
//         name: "David",
//         marks: 94.4,
//     },
//     {
//         name: "Raj",
//         marks: 88
//     },
// ]

// arrayObj.forEach(
//     (el)=>{
//         console.log(el)
//     }
// )

// let gpa = students.map((el)=>{
//     return el.marks / 10;
// })
// console.log(gpa)

/**
 * Filter() function:__________________________
 */

let nums = [1, 2, 3, 4, 5,10, 23,];

// let ans = nums.filter((el)=>{
//     return el <5;
// })

// console.log(ans)

/**
 * Every() method:
 *
 */

// let even = nums.every((el)=>{//similar to logical and
//    return el%2 ==0;
// })

// console.log(even)

/**
 * some() function:
 */

// let even = nums.some((el)=>{//similar to logical or
//        return el%2 ==0;
//     })
// console.log(even)

/**
 *
 * reduce() function
 */

// let finalNums = nums.reduce((res, el) => {
//   console.log("Res is: " + res);
//   return res + el;
// });
// console.log(" ");
// console.log("FinalNums is: " + finalNums);


// Finding Max nums
// let max = -1;
// for(let i = 0; i<nums.length; i++){
//     console.log(nums[i]);
//     if(max < nums[i]){
//         max = nums[i]
//     }
// }

// console.log(`Max is: ${max}`);

// let maxval = nums.reduce((max, el) => {
//     if (max<el) {
//         console.log(max);
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(maxval);