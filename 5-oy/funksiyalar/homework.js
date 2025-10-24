// function getLength(str) {
//     return str.length;
// }

// // console.log(getLength("JavaScript")); 



// function findMax(arr) {
//     let max = arr[0];

// console.log(findMax([2,8,5,10]));



// function reverseString(str) {
//     let salom  = "salom"; 
// }
// // console.log(salom , malos); 



// function longestWord(sentence ) { 
//     let words = sentence.split("men javascriptni yaxshi ko'raman");

// console.log (longestWord);  

// function checkNumber(num) {
//     if (num % 2 === 0) {
//         return "musbat son";
//     } else {
//         return "manfiy son";
//     }
// }
// // console.log(checkNumber(-5));


// let age = (birth , curr) => curr - birth;
// console.log(age(2009,2025));

//uy ishi

// 1. getLength(str)
const getLength = str => str.length;

// 2. findMax(arr)
const findMax = arr => Math.max(...arr);

// 3. reverseString(str)
const reverseString = str => str.split('').reverse().join('');

// 4. longestWord(sentence)
const longestWord = sentence => {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => 
        word.length > longest.length ? word : longest
    , "");
};

// 5. checkNumber(num)
const checkNumber = num => 
    num > 0 ? "Musbat" : num < 0 ? "Manfiy" : "Nol";

// 6. calculateAge(birthYear, currentYear)
const calculateAge = (birthYear, currentYear) => currentYear - birthYear;

// 7. countWords(sentence)
const countWords = sentence => sentence.trim().split;
