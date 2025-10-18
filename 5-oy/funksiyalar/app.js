// 1 function getLength(str) {
//     if (str === null || str === undefined) return 0;
//     return String(str).length;
// }

// // Misol:
// console.log(getLength("JavaScript")); // 10

// // agar modul sifatida ishlatilsa
// if (typeof module !== "undefined" && module.exports) {
//     module.exports = getLength;
// }
 // 

// 2 function findMax(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return null;
//     }
//     return Math.max(...arr);
// }

// // Test the function
// let numbers = [2, 8, 5, 10];
// console.log(findMax(numbers)); // Output: 10


// 3function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Test examples
// console.log(reverseString("salom")); // Output: "molas"


// 4 function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Test examples
// console.log(reverseString("salom")); // Output: "molas"

// 5 function checkNumber(num) {
//     if (num > 0) {
//         return "Musbat";
//     } else if (num < 0) {
//         return "Manfiy";
//     } else {
//         return "Nol";
//     }
// }

// // Misol uchun
// console.log(checkNumber(-5)); // "Manfiy"

// 6 function calculateAge(birthYear, currentYear) {
//     return currentYear - birthYear;
// }

// // Example usage:
// const age = calculateAge(2005, 2025);
// console.log(age); // Output: 20

// 7 function countWords(sentence) {
//     // Split the sentence by spaces and filter out any empty strings
//     const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
//     return words.length;
// }

// // Example usage
// const result = countWords("Men bugun darsga bordim");
// console.log(result); // Output: 4

