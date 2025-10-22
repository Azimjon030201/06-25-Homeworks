// let massiv = [1, 3, 10, 7, 9, 11, 18, 15, 17, 19, 21, 22, 25, 20, 29, 31, 32];

// for (let k = 0; k < massiv.length; k++) {
//   if (massiv[k] % 2 !== 0) {
//     console.log(massiv[k]);
//   } else {
//     // console.log("Juft son");
//   }
// }
// let raqam = Number(prompt("Son kiriting (N):"));
// let j = 1;

// while (j <= raqam) {
//   if ((j % 10) % 3 === 0) {
//     console.log(j);
//   }
//   j++;
// }
// let qiymat = 10;

// while (qiymat < 100) {
//   let birlikRaqam = qiymat % 10;
//   let onlikRaqam = Math.floor(qiymat / 10);
//   let yigindiRaqam = birlikRaqam + onlikRaqam;

//   if (yigindiRaqam % 2 === 0) {
//     console.log(qiymat);
//   }
//   qiymat++;
// }
// let kiritilganSon = Number(prompt("Son kiriting (N):"));
// let vaqtSon = kiritilganSon;
// let raqamlarSoni = 0;

// while (vaqtSon > 0) {
//   raqamlarSoni++;
//   vaqtSon = Math.floor(vaqtSon / 10);
// }

// console.log("Raqamlar soni:", raqamlarSoni);
// let num = Number(prompt("Son kiriting (N):"));
// let temp = num;
// let summa = 0;

// while (temp > 0) {
//   summa += temp % 10;
//   temp = Math.floor(temp / 10);
// }

// console.log("Raqamlar yig‘indisi:", summa);
// let kiritma = Number(prompt("Son kiriting (N):"));
// let kopiya = kiritma;
// let mavjud2 = false;

// while (kopiya > 0) {
//   if (kopiya % 10 === 2) {
//     mavjud2 = true;
//     break;
//   }
//   kopiya = Math.floor(kopiya / 10);
// }

// console.log(mavjud2 ? 2 : -1);
// let son = Number(prompt("Son kiriting:"));
// let vaqtincha = son;
// let mavjudToq = false;

// while (vaqtincha > 0) {
//   let raqam = vaqtincha % 10;
//   if (raqam % 2 !== 0) {
//     mavjudToq = true;
//     break;
//   }
//   vaqtincha = Math.floor(vaqtincha / 10);
// }

// console.log(mavjudToq ? "I" : "-1");
// let qiymatN = Number(prompt("N ni kiriting (1 < N < 100):"));
// let topildi = false;

// for (let i = 100; i <= 999; i++) {
//   if (i % qiymatN === 0) {
//     console.log("Uch xonali karrali son:", i);
//     topildi = true;
//   }
// }

// if (!topildi) {
//   console.log("Mos uch xonali son topilmadi.");
// }
// let kesmaA = Number(prompt("A ni kiriting (A < B):"));
// let kesmaB = Number(prompt("B ni kiriting (A < B):"));
// let soni = 0;

// while (kesmaB >= kesmaA) {
//   kesmaB -= kesmaA;
//   soni++;
// }

// console.log("Ortib qolgan kesma uzunligi:", kesmaB);
// let aUzunlik = Number(prompt("A ni kiriting (A < B):"));
// let bUzunlik = Number(prompt("B ni kiriting (A < B):"));
// let kesmalar = 0;

// while (bUzunlik >= aUzunlik) {
//   bUzunlik -= aUzunlik;
//   kesmalar++;
// }

// console.log("Kesib olingan kesmalar soni:", kesmalar);
// let sonN = Number(prompt("N ni kiriting (N > M):"));
// let sonM = Number(prompt("M ni kiriting (M < N):"));
// let butun = 0;
// let qoldiq = sonN;

// while (qoldiq >= sonM) {
//   qoldiq -= sonM;
//   butun++;
// }

// console.log("Butun qism:", butun);
// console.log("Qoldiq qism:", qoldiq);
// let raqamN = Number(prompt("Son kiriting (N):"));
// let darajaSoni = 0;
// let natija = 1;

// while (natija < raqamN) {
//   natija *= 7;
//   darajaSoni++;
// }

// if (natija === raqamN) {
//   console.log("Bu son 7 ning darajasi. Daraja ko‘rsatkich:", darajaSoni);
// } else {
//   console.log(-1);
// }

// while (vaqt > 0) {
//   let raqam = vaqt % 10;
//   if (raqam % 2 !== 0) {
//     topildi = true;
//     break;
//   }
//   vaqt = Math.floor(vaqt / 10);
// }

// console.log(topildi ? "I" : "-1");
//  // 1. Matn uzunligini hisoblash
// function getLength(str) {
//   return str.length;
// }



// // 2. Eng katta sonni topish
// function findMax(arr) {
//   return Math.max(...arr);
// }



// // 3. Matnni teskari qilish
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// // 4. Eng uzun so‘zni topish
// function longestWord(sentence) {
//   const words = sentence.split(' ');
//   let longest = '';
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }


// // 5. Son holatini aniqlash
// function checkNumber(num) {
//   if (num > 0) return "Musbat";
//   else if (num < 0) return "Manfiy";
//   else return "Nol";
// }



// // 6. Yoshni hisoblash
// function calculateAge(birthYear, currentYear) {
//   return currentYear - birthYear;
// }


// // 7. So‘zlar sonini hisoblash
// function countWords(sentence) {
//   return sentence.trim().split(/\s+/).length;
// }
 


 // arr da
//  // 1. Matn uzunligi
// let arr1 = ["JavaScript"];
// console.log(arr1[0].length); 
// // 2. Eng katta son
// let arr2 = [2, 8, 5, 10];
// console.log(Math.max(...arr2)); 

// // 3. Matnni teskari qilish
// let arr3 = ["salom"];
// let teskari = arr3[0].split("").reverse().join("");
// console.log(teskari); 

// // 4. Eng uzun so'z
// let arr4 = ["Men JavaScriptni yaxshi ko‘raman"];
// let sozlar = arr4[0].split(" ");
// let engUzun = sozlar[0];
// for (let i = 1; i < sozlar.length; i++) {
//   if (sozlar[i].length > engUzun.length) {
//     engUzun = sozlar[i];
//   }
// }
// console.log(engUzun); 

// // 5. Son musbat, manfiy yoki nol
// let arr5 = [-5];
// let son = arr5[0];
// if (son > 0) console.log("Musbat");
// else if (son < 0) console.log("Manfiy");
// else console.log("Nol");

// // 6. Yoshni hisoblash
// let arr6 = [2005, 2025];
// console.log(arr6[1] - arr6[0]); 

// // 7. So'zlar soni
// let arr7 = ["Men bugun darsga bordim"];
// let count = arr7[0].split(" ").length;
// console.log(count); 
