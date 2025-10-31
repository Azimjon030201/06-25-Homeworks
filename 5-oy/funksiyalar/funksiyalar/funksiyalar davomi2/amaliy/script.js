  // 1function checkTemperature(t) {
//     if (t < 0) {
//         return "Sovuq";
//     } else if (t >= 0 && t <= 25) {
//         return "Salqin";
//     } else {
//         return "Issiq";
//     }
// }
// console.log(checkTemperature(0));  // "Sovuq"
// console.log(checkTemperature(20));  // "Salqin"
// console.log(checkTemperature(26));  // "Issiq"




    //2  function getFare(transport) {
//     switch (transport) {
//         case "bus":
//             return "2000 so'm";
//         case "car":
//             return "5000 so'm";
//         case "bike":
//             return "1000 so'm";
//         default:
//             return "Nomalum transport";
//     }
// }
// console.log(getFare("bus"));  // "2000 so'm"
// console.log(getFare("car"));  // "5000 so'm"
// console.log(getFare("bike"));  // "1000 so'm"
// console.log(getFare("Noma'lum transport")); // 10000 so'm


// 3  function countOdd1to100() {
//     let count = 0;
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }   
//     }
//     return count;
// }
// console.log(countOdd1to100()); 
//4  function reverseArray(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }
// console.log(reverseArray(["salom", "dunyo"]));
// 5 function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
