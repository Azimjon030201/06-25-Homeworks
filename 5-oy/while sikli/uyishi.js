// 1// Natural N sonining raqamlari sonini chiqaring.
// let n = 12345; // Misol uchun N soni
// let count = 0;
// let temp = n;
// while (temp > 0) {
//     count++;
//     temp = Math.floor(temp / 10);
// }
// console.log(`Natural ${n} sonining raqamlari soni: ${count}`);
 
// 2 // Natural N sonining raqamlari yig'indisini chiqaring.
// let n = 12345; // Misol uchun N soni
// let sum = 0;
// let temp = n;
// while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
// }
// console.log(`Natural ${n} sonining raqamlari yig'indisi: ${sum}`);

// 3  // Natural N sonining raqamlari ichida 2 raqami bor bo'lsa, "2", yo'q bo'lsa "-1"chiqaring.
// function findTwoInNumber(num) {
//     const numStr = num.toString();
//     if (numStr.includes('2')) {
//         return "2";
//     } else {
//         return "-1";
//     }
// }

// // Misollar
// console.log(findTwoInNumber(123)); // "2"
// console.log(findTwoInNumber(456)); // "-1"
// console.log(findTwoInNumber(2021)); // "2"
// console.log(findTwoInNumber(789)); // "-1"

// 4  // Natural N sonining raqamlari ichida toq qiymatli raqam bor bolsa "1", yoq bolsa "-1" chiqaring.
// let n = 123456; 
// let hasOddDigit = false;

// while (n > 0) { 
//     let digit = n % 10;
//     if (digit % 2 !== 0) { 
//         hasOddDigit = true;
//         break; 
//     }
//     n = Math.floor(n / 10);
// } 

// if (hasOddDigit) {
//     console.log("1");
// } else {
//     console.log("-1");
// }

// 5  // Natural N sonini berilgan (1<N<100). n soniga karrali biror uch xonali sonni aniqlang.
// let N = 45;
// let found = false;

// for (let i = 100; i < 1000; i++) {
//     if (i % N === 0) {
//         console.log(i);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log("-1");
// }

// 6  // Natural N sonini berilgan (1000<N<10000). n sonining raqamlari yig'indisiga karrali biror uch xonali sonni aniqlang.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("N sonini kiriting (1000<N<10000): ", (answer) => {
//     const N = parseInt(answer);
//     if (N <= 1000 || N >= 10000) {
//         console.log("N soni 1000 dan katta va 10000 dan kichik bo'lishi kerak.");
//     } else {
//         const result = findThreeDigitMultipleOfSum(N);
//         console.log(result);
//     }
//     rl.close();
// });

// function findThreeDigitMultipleOfSum(N) {
//     const sumOfDigits = N.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
//     for (let i = 100; i < 1000; i++) {
//         if (i % sumOfDigits === 0) {
//             return i;
//         }
//     }
//     return "Bunday uch xonali son topilmadi.";
// }

// 7  // Natural A va B sonlari berilgan (A<B). B uzunlikdagi kesma A uzunlikdagi kesmalarga bolinadi. Ortib qolgan kesma uzunligini aniqlang. Kopaytirish, bolish va qoldiqli bolish amallaridan foydalanish mumkin emas.
// let A = 5; // A soni
// let B = 23; // B soni
// let remainingLength = B - A * Math.floor(B / A);
// console.log("Ortib qolgan kesma uzunligi:", remainingLength);
// // Natija: Ortib qolgan kesma uzunligi: 3

// 8  // Natural A va B sonlari berilgan (A<B). B uzunlikdagi kesma A uzunlikdagi kesmalar kesib olindi. Kopi bilan nechta kesma kesib olinganini aniqlang. Kopaytirish, bolish va qoldiqli bolish amallaridan foydalanish mumkin emas.
// let A = 3; // A uzunlikdagi kesma
// let B = 10; // B uzunlikdagi kesma
// let count = 0; // Kesilgan kesmalar soni
// let totalLength = 0; // Jami kesilgan uzunlik

// while (totalLength + A < B) {
//     totalLength += A;
//     count++;
// }

// console.log("Kesilgan kesmalar soni:", count);
// console.log("Ortib qolgan kesma uzunligi:", B - totalLength);
// // Masalan, A=3 va B=10 bo'lsa, 3 uzunlikdagi kesmadan 3 marta kesib olinadi va ortiqcha 1 uzunlik qoladi.

// 9  // Natural  N va M sonlari berilgan. Faqat qoshish va ayirish amallaridan foydalanib N sonining M ga bolgandagi butun  va qoldiq qismlarini aniqlang.
// let N = 29; // Natural son
// let M = 5;  // Natural son 
// let butunQism = 0; // Butun qismni saqlash uchun o'zgaruvchi
// let qoldiqQism = N; // Qoldiq qismini boshlang'ich qiymat sifatida N ga tenglashtiramiz
// // N ni M ga bo'lish uchun qoshish va ayirish amallaridan foydalanamiz
// while (qoldiqQism >= M) {
//     qoldiqQism -= M; // Qoldiq qismini M ga kamaytiramiz
//     butunQism += 1;  // Butun qismni 1 ga oshiramiz
// }
// console.log("Butun qism:", butunQism);
// console.log("Qoldiq qism:", qoldiqQism);

// 10   // Natural N soni berilgan. Agar N soni 7 ning biror darajasi bolsa daraja korsatkichini, aks holda -1 chiqaring. 
// let N = 49; // Misol uchun N ni 49 deb olamiz
// let result = -1;
// if (N > 0) {
//     let power = 0;
//     let value = 1;  
//     while (value < N) {
//         value *= 7;
//         power++;
//     }
//     if (value === N) {
//         result = power;
//     }
// }
// console.log(result);

