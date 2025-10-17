 // 1
// let K = parseFloat(prompt("K sonini kiriting:"));
// let N = parseInt(prompt("N sonini kiriting:"));

// for (let i = 0; i < N; i++) {
//     console.log(K.toFixed(2));
// }

// 2 
// let A = 3; // Misol uchun qiymat
// let B = 8; // Misol uchun qiymat

// let count = 0;
// for (let i = A; i <= B; i++) {
//     console.log(i);
//     count++;
// }
// console.log("Chiqarilgan sonlar soni:", count);

 // // 3 
//  let A = 3; // Misol uchun
// let B = 8; // Misol uchun

// let count = 0;
// for (let i = B - 1; i > A; i--) {
//     console.log(i);
//     count++;
// }
// console.log("Chiqarilgan sonlar soni:", count);
//  // 4 
// let narx = 12.75; // Tovar narxi (haqiqiy son)
// let count = 0;

// // Ikki xonali toq sonlar: 11, 13, ..., 99
// for (let i = 11; i <= 99; i += 2) {
//     count++;
//     let jamiNarx = narx * count;
//     // Natijani 2 xonali aniqlikda (tiyinlarda) chiqaramiz
//     console.log(`${count}-tovar narxi: ${jamiNarx.toFixed(2)}`);
// }

 // 5 let narx = 8500; // Masalan, 1 kg un narxi (so'mda), bu qiymatni o'zgartiring

// for (let gramm = 3800; gramm >= 200; gramm -= 200) {
//     let kilo = gramm / 1000;
//     let summa = kilo * narx;
//     console.log(`${gramm} gramm un narxi: ${summa.toFixed(2)} so'm`);
// }

 // 6  let A = 3; // Misol uchun
// let B = 8; // Misol uchun

// let sum = 0;
// for (let i = A + 1; i < B; i++) {
//     sum += i;
// }

// console.log("Yig'indi:", sum);

 // 7 let A = 3; // boshlang'ich qiymat, o'zgartiring
// let B = 8; // tugash qiymati, o'zgartiring

// let sum = 0;
// for (let i = Math.min(A, B); i <= Math.max(A, B); i++) {
//     sum += i;
// }

// console.log(`Yig'indi: ${sum}`);

 // 8 let A = 3; // boshlang'ich qiymat, o'zgartiring
// let B = 11; // tugash qiymati, o'zgartiring

// if (A > B) {
//     console.log("A soni B dan kichik bo'lishi kerak.");
// } else {
//     let kopaytma = 1;
//     let hasOdd = false;
//     for (let i = A; i <= B; i++) {
//         if (i % 2 !== 0) {
//             kopaytma *= i;
//             hasOdd = true;
//         }
//     }
//     if (hasOdd) {
//         console.log("Toq sonlar ko'paytmasi:", kopaytma);
//     } else {
//         console.log("Bu oraliqda toq son yo'q.");
//     }
// }

 // 9 let A = 3; // boshlang'ich qiymat, o'zgartiring
// let B = 10; // oxirgi qiymat, o'zgartiring

// let sum = 0;
// for (let i = A; i <= B; i++) {
//     if (i % 2 === 0) {
//         sum += i * i;
//     }
// }

// console.log("Juft sonlar kvadratlari yig'indisi:", sum);

 // 9 let A = 3; // boshlang'ich qiymat, o'zgartiring
// let B = 10; // oxirgi qiymat, o'zgartiring

// let sum = 0;
// for (let i = A; i <= B; i++) {
//     if (i % 2 === 0) {
//         sum += i * i;
//     }
// }

// console.log("Juft sonlar kvadratlari yig'indisi:", sum);

