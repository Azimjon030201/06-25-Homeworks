// // while 34
// let toq = [1, 3, 10, 7, 9, 11, 18, 15, 17, 19, 21, 22, 25, 20, 29, 31, 32];
// let juft = toq % 2 == 0;
// console.log(juft);
// to'gri
// for (let i = 0; i < toq.length; i++) {
//   if (toq[i] % 2 != 0) {
//     console.log(toq[i]);
//   }else{
    // console.log("son juft");
// }
// // while 35
// let N = Number(prompt("N ni kiriting:"));
// let i = 1;
// while (i <= N) {
//   if ((i % 10) % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// }
// // while 36
// let son = 10;
// while (son < 100) {
//   let birlik = son % 10;
//   let onlik = Math.floor(son / 10);
//   let yigindi = birlik + onlik;
//   if (yigindi % 2 === 0) {
//     console.log(son);
//   }
//   son++;
// }
// // while 37
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let soni = 0;
// while (n > 0) {
//   soni++;
//   n = Math.floor(n / 10);
// }
// console.log("Raqamlar soni:", soni);
// // while 38
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let yigindi = 0;
// while (n > 0) {
//   yigindi += n % 10;
//   n = Math.floor(n / 10);
// }
// console.log("Raqamlar yig‘indisi:", yigindi);
// // while 39
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   if (n % 10 === 2) {
//     bor = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }
// console.log(bor ? 2 : -1);

// Natural N sonining raqamlari ichida toq qiymatli raqam bor bo'lsa "I", yo'q bo'lsa"-1" chiqaring.
// // while 40
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   if ((n % 10) % 2 != 0) {
//     bor = true;
//     break;
//   }

// Natural N soni berilgan (1<N<100). N soniga karrali biror uch xonali sonni aniqlang
// let N = Number(prompt("N ni kiriting (1<N<100):"));
// let found = false;
// for (let i = 100; i <= 999; i++) {
//   if (i % N === 0) {
//     console.log("Uch xonali karrali son:", i);
//     found = true;
//     // break;
//   }
// }
// if (!found) {
//   console.log("Bunday uch xonali karrali son mavjud emas.");
// }


// Natural A va B sonlari berilgan (A<B). B uzunlikdagi kesma A uzunlikdagi kesmalarga bo'lindi. Ortib qolgan kesma uzunligini aniqlang. Ko'paytirish, boʻlish va qoldiqli bo'lish amallaridan foydalanish mumkin emas.
// let A = Number(prompt("A ni kiriting (A<B):"));
// let B = Number(prompt("B ni kiriting (A<B):"));
// let count = 0;
// while (B >= A) {
//   B -= A;
//   count++;
// }
// console.log("Ortib qolgan kesma uzunligi:", B);

// Natural A va B sonlari berilgan (A<B). B uzunlikdagi kesma A uzunlikdagi kesmalar kesib olindi. Ko'pi bilan nechta kesma kesib olinganini aniqlang. Ko'paytirish, bo'lish va qoldiqli bo'lish amallaridan foydalanish mumkin emas.
// let A = Number(prompt("A ni kiriting (A<B):"));
// let B = Number(prompt("B ni kiriting (A<B):"));
// let count = 0;
// while (B >= A) {
//   B -= A;
//   count++;
// }
// console.log("Kesib olingan kesmalar soni:", count);

// Natural N va M sonlari berilgan. Faqat qo'shish va ayirish amallaridan foydalanib N sonining M ga bo'lgandagi butun va qoldiq qismlarini aniqlang.
// let N = Number(prompt("N ni kiriting (N>M):"));
// let M = Number(prompt("M ni kiriting (N>M):"));
// let butunQism = 0;
// let qoldiqQism = N;
// while (qoldiqQism >= M) {
//   qoldiqQism -= M;
//   butunQism++;
// }
// console.log("Butun qism:", butunQism);
// console.log("Qoldiq qism:", qoldiqQism);

// Natural N soni berilgan. Agar N soni 7 ning biror darajasi bo'lsa daraja ko'rsatkichini, aks holda -1 chiqaring
// let N = Number(prompt("N ni kiriting:"));
// let daraja = 0;
// let qiymat = 1; // 7 ning 0-darajasi
// while (qiymat < N) {
//   qiymat *= 7;
//   daraja++;
// }
// if (qiymat === N) {
//   console.log("N soni 7 ning darajasi, daraja ko'rsatkich:", daraja);
// } else {
//   console.log(-1);
// }





//    n = Math.floor(n / 10);
// }
// console.log(bor ? 2 : -1);

// Natural N sonining raqamlari ichida toq qiymatli raqam bor bo'lsa "I", yo'q bo'lsa"-1" chiqaring.
// // while 40
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   n = Math.floor(n / 10);
// }
// console.log(bor ? 2 : -1);

// Natural N sonining raqamlari ichida toq qiymatli raqam bor bo'lsa "I", yo'q bo'lsa"-1" chiqaring.
// // while 40
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   if ((n % 10) % 2 != 0) {
//     bor = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }
// console.log(bor ? 1 : -1);


















// // for 1
// let K = Number(prompt("Haqiqiy son K ni kiriting:"));
// let N = Number(prompt("Natural son N ni kiriting:"));

// for (let i = 1; i <= N; i++) {
//   console.log(K.toFixed(2));
// }
// // for 2
// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting (A dan katta bo‘lsin):"));

// for (let i = A; i <= B; i++) {
//   console.log(i);
// }
// // for 3
// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting (A dan katta bo‘lsin):"));

// for (let i = B; i >= A; i--) {
//   console.log(i);
// }
// // for 4
// let narx = Number(prompt("1 kg narxni kiriting:"));

// for (let i = 1; i <= 10; i++) {
//   console.log(i + " kg = " + (narx * i).toFixed(2));
// }
// // for 5
// let narx = Number(prompt("1 kg narxni kiriting:"));

// for (let i = 0.2; i <= 1; i += 0.2) {
//   console.log(i.toFixed(1) + " kg = " + (narx * i).toFixed(2));
// }
// // for 6
// Butun a va b sonlari berilgan (a<b). a dan b gacha bo‘lgan sonlar yig‘indisini hisoblang.(ularning o‘zi hisoblanmaydi)
// let a = Number(prompt("a ni kiriting (a<b):"));
// let b = Number(prompt("b ni kiriting (a<b):"));
// let yigindi = 0;
// for (let i = a + 1; i < b; i++) {
//   yigindi += i;
// }
// console.log("Yig'indi:", yigindi);
// // for 7
// Butun a va b sonlari berilgan (a<b). a va b sonlar oralig'ida (ularning o'zi ham hisoblanadi) sonlar yig'indisini hisoblang.
// let a = Number(prompt("a ni kiriting (a<b):"));
// let b = Number(prompt("b ni kiriting (a<b):"));
// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//   yigindi += i;
// }
// console.log("Yig'indi:", yigindi);
// // for 8
// Butun a va b sonlari berilgan (a<b). a va b sonlar oralig'ida (ularning o'zi ham hisoblanadi) toq sonlar ko'paytmasini hisoblang.
// let a = Number(prompt("a ni kiriting (a<b):"));
// let b = Number(prompt("b ni kiriting (a<b):"));
// let kopaytma = 1;
// for (let i = a; i <= b; i++) {
//   if (i % 2 !== 0) {
//     kopaytma *= i;
//   }
// }
// console.log("Ko'paytma:", kopaytma);
// // for 9
// Butun a va b sonlari berilgan (a<b). a va b sonlar oralig'ida (ularning o'zi ham hisoblanadi) juft sonlar kvadratlari yig'indisini hisoblang.
// let a = Number(prompt("a ni kiriting (a<b):"));
// let b = Number(prompt("b ni kiriting (a<b):"));
// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     yigindi += i * i;
//   }
// }
// console.log("Yig'indi:", yigindi);
// // for 10
// 1*2+3*4+5*6+...+101*102 yig'indisini hisoblang.
// let yigindi = 0;
// for (let i = 1; i <= 101; i += 2) {
//   yigindi += i * (i + 1);
// }
// console.log("Yig'indi:", yigindi);
