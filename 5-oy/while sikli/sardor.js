// // 1
// function getLength(str) {
//     return str.length;
// }
// console.log(getLength("JavaScript")) 

// // 2
// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([2, 8, 5, 10])) 

// // 3
// function reverseString(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverseString("salom")) 

// // 4
// function longestWord(sentence) {
//     const words = sentence.split(' ')
//     let longest = '';
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i]
//         }
//     }
//     return longest
// }
// console.log(longestWord("Men JavaScriptni yaxshi ko‘raman"))
// // 5
// function checkNumber(num) {
//     if (num > 0) {
//         return "Musbat"
//     } else if (num < 0) {
//         return "Manfiy"
//     } else {
//         return "Nol"
//     }
// }
// console.log(checkNumber(-5)); // "Manfiy"

// // 6
// function calculateAge(birthYear, currentYear) {
//     return currentYear - birthYear;
// }
// console.log(calculateAge(2005, 2025)); // 20

// // 7
// function countWords(sentence) {
//     const words = sentence.trim().split(/\s+/)
//     return words.length
// }
// console.log(countWords("Men bugun darsga bordim"))