// // 1
// let getLength = (str) => str.length;
// console.log(getLength("JavaScript"))

// // 2
// let findMax = (arr) => Math.max(...arr);
// console.log(findMax([2, 8, 5, 10])); 


// // 3
// let reverseString = (str) => str.split('').reverse().join('');
// console.log(reverseString("salom"));

// // 4
// let longestWord = (sentence) => {
//   const words = sentence.split(' ');
//   let longest = '';
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// };
// console.log(longestWord("Men Java Script ni yaxshi ko'raman")); 
// // 5
// let checkNumber = (num) => {
//   if (num > 0) {
//     return "Musbat";
//   } else if (num < 0) {
//     return "Manfiy";
//   } else {
//     return "Nol";
//   }
// };
// console.log(checkNumber(-5)); 


// // 6
// let birthYear = prompt("Tug'ilgan yilingizni kiritng:")
// let calculateAge = (birthYear, currentYear) => currentYear - birthYear
// console.log(calculateAge(birthYear, 2025));

// //  7
// let countWords = (sentech) => {
//   let words = sentech.trim().split(/\s+/);
//   return words.length;
// };
// console.log(countWords("Men bugun darsga bordim"));
