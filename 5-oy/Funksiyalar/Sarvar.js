// function getLength(str) {
//     for (const element of str) {
        
//     }
//     return str.length;
// }
// console.log(getLength("hdbskfhalwjfbscjb"));

// let summ = (a,b,c) => (a+b+c)/3
// console.log(summ(6,9,6));

// 6
// let calculateAge = (birthYear, currentYear) => currentYear - birthYear
// console.log(calculateAge(2009,2025));

// 7
// let countWords = (sentence) => {
//     let arr = sentence.split(" ")
//     return arr.length
// }
// console.log(countWords("mening ismim sarvar"));

// 4
let  longestWord = (sentence) => {
    let max = 0
    let maxSoz =""
    let matn = sentence.split(" ")
    for (const soz of matn) {
        if (soz.length > max) {
            max = soz.length
            maxSoz = soz
        }
    }
    return maxSoz
}
console.log(longestWord("men kecha uyga bormadim"));
