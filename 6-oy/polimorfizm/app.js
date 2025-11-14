// 1 function addUp(n) {
//     if (typeof n !== 'number' || !Number.isFinite(n) || n < 1 || n > 1000 || !Number.isInteger(n)) {
//         throw new TypeError('addUp expects an integer between 1 and 1000');
//     }
//     return (n * (n + 1)) / 2;
// }


// console.log(addUp(4));   // 10
// console.log(addUp(13));  // 91
// console.log(addUp(600)); // 180300

// module.exports = addUp;

// 2 function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
// }

// console.log(sortByLength(["Olim", "Jamshid", "Muhammadali"]));
// // ➞ ["Olim", "Jamshid", "Muhammadali"]

// console.log(sortByLength(["Abdulloh", "Karimov", "Ismoilov", "Xudoyberdiyev"]));
// // ➞ ["Karimov", "Abdulloh", "Ismoilov", "Xudoyberdiyev"]

// console.log(sortByLength(["Alisher", "Bobur", "Temur"]));
// // ➞ ["Bobur", "Temur", "Alisher"]

// module.exports = sortByLength;


// 3 function largestEven(nums) {
//     const evenNumbers = nums.filter(n => n % 2 === 0);
//     return evenNumbers.length > 0 ? Math.max(...evenNumbers) : -1;
// }

// console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); // 10
// console.log(largestEven([1, 3, 5, 7])); // -1
// console.log(largestEven([0, 19, 18973623])); // 0

// module.exports = largestEven;

// 4 function correctStream(userTyped, correct) {
//     return userTyped.map((word, index) => word === correct[index] ? 1 : -1);
// }

// console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]));
// // ➞ [1, 1, -1]

// console.log(correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]));
// // ➞ [1, -1, 1, 1, 1]

// module.exports = correctStream;


// 5 function getVoteCount(votes) {
//     return votes.upvotes - votes.downvotes;
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0

// module.exports = getVoteCount;