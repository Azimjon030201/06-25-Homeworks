//While N -37
// let N = prompt("Natural sonni kiriting:");
// let count = 0;
// let temp = N;

// while (temp > 0) {
//   temp = Math.floor(temp / 10);
//   count++;
// }

// console.log("Raqamlar soni:", count);
//While N -38
// let N = prompt("Natural sonni kiriting:");
// let sum = 0;
// let temp = N;

// while (temp > 0) {
//   let raqam = temp % 10;
//   sum = sum + raqam;
//   temp = Math.floor(temp / 10);
  
// }

// console.log("Raqamlar yig'indisi:", sum);
//While N -39
// let N = prompt("Natural sonni kiriting:");
// let temp = N;
// let son = false;

// while (temp > 0) {
//   let raqam = temp % 10;
//   if (raqam === 2) {
//     son = true;
//     break;
//   }
//   temp = Math.floor(temp / 10);
// }

// if (son) {
//   console.log("2");
// } else {
//   console.log("-1");
// }
//While N - 40
// let N = prompt("Natural sonni kiriting:");
// let temp = N;
// let son = false;

// while (temp > 0) {
//   let raqam = temp % 10;
//   if (raqam % 2 !== 0) {
//     son = true;
//     break;
//   }
//   temp = Math.floor(temp / 10);
// }

// if (son) {
//   console.log("1");
// } else {
//   console.log("-1");
// }
//While N - 41
// let N = prompt("1 < N < 100 bo'lgan natural sonni kiriting:");

// if (N > 1 && N < 100) {
//   let son = 100;
//   let raqam = false;

//   while (son < 1000) {
//     if (son % N === 0) {
//       console.log("N ga karrali uch xonali son:", son);
//       raqam = true;
//       break;
//     }
//     son++;
//   }

//   if (!raqam) {
//     console.log("Bunday uch xonali son topilmadi.");
//   }
// } else {
//   console.log("N 1 dan katta va 100 dan kichik bo‘lishi kerak!");
// }
//While N - 42
// let N = prompt("1000 < N < 10000 bo'lgan natural sonni kiriting:");
// //misol u-n 2345=14= 112 chiqadi//
// if (N > 1000 && N < 10000) {
//   let temp = N;
//   let sum = 0;

//   while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
//   }

//   let son = 100;
//   let raqam = false;

//   while (son < 1000) {
//     if (son % sum === 0) {
//       console.log("Raqamlar yig'indisi:", sum);
//       console.log("Karrali uch xonali son:", son);
//       raqam = true;
//       break;
//     }
//     son++;
//   }

//   if (!raqam) {
//     console.log("Bunday uch xonali son topilmadi.");
//   }
// } else {
//   console.log("N 1000 dan katta va 10000 dan kichik bo‘lishi kerak!");
// }
//While N - 45
// let N = prompt("Natural N sonini kiriting:");
// let M = prompt("Natural M sonini kiriting:");

// if (M > 0) {
//   let butun = 0;
//   let qoldiq = N;

//   while (qoldiq >= M) {
//     qoldiq = qoldiq - M;
//     butun = butun + 1;
//   }

//   console.log("Butun qism:", butun);
//   console.log("Qoldiq qism:", qoldiq);
// } else {
//   console.log("M soni 0 dan katta bo‘lishi kerak!");
// }