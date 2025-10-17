// // 37
// let N = Number(prompt("N sonini kiriting:"));
// let count = 0;
// let temp = N;

// while (temp > 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// alert("Raqamlar soni: " + count);
// // 38
// let N = Number(prompt("N sonini kiriting:"));
// let sum = 0;
// let temp = N;

// while (temp > 0) {
//   sum += temp % 10;
//   temp = Math.floor(temp / 10);
// }
// alert("Raqamlar yig‘indisi: " + sum);
// // 39
// let N = Number(prompt("N sonini kiriting:"));
// let found = -1;
// let temp = N;

// while (temp > 0) {
//   if (temp % 10 === 2) {
//     found = 2;
//     break;
//   }
//   temp = Math.floor(temp / 10);
// }
// alert(found);

// // 40
// let N = Number(prompt("N sonini kiriting:"));
// let hasOdd = -1;
// let temp = N;

// while (temp > 0) {
//   if ((temp % 10) % 2 === 1) {
//     hasOdd = 1;
//     break;
//   }
//   temp = Math.floor(temp / 10);
// }
// alert(hasOdd);
// // 41
// let N = Number(prompt("N (1<N<100) kiriting:"));
// let x = 100;

// while (x < 1000) {
//   if (x % N === 0) {
//     alert(x);
//     break;
//   }
//   x++;
// }
// // 42
// let N = Number(prompt("N (1000<N<100000) kiriting:"));
// let sum = 0, temp = N;

// while (temp > 0) {
//   sum += temp % 10;
//   temp = Math.floor(temp / 10);
// }

// let x = 100;
// while (x < 1000) {
//   if (x % sum === 0) {
//     alert(x);
//     break;
//   }
//   x++;
// }
// // 43
// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting (A<B):"));
// while (B >= A) {
//   B -= A;
// }
// alert("Qoldiq uzunlik: " + B);
// // 44
// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting (A<B):"));
// let count = 0;

// while (B >= A) {
//   B -= A;
//   count++;
// }
// alert("Kesma soni: " + count);
// // 45
// let N = Number(prompt("N sonini kiriting:"));
// let M = Number(prompt("M sonini kiriting:"));
// let q = 0;

// while (N >= M) {
//   N -= M;
//   q++;
// }
// alert("Butun qism: " + q + ", Qoldiq: " + N);
// // 46
// let N = Number(prompt("N sonini kiriting:"));
// let k = 0;
// let power = 1;
// let found = -1;

// while (power <= N) {
//   if (power === N) {
//     found = k;
//     break;
//   }
//   power *= 7;
//   k++;
// }
// alert(found);
// // 47
// let N = Number(prompt("N sonini kiriting:"));
// let M = 0;

// while ((M + 1) ** 2 <= N) {
//   M++;
// }
// alert("Natija: " + M);
// // 48
// let N = Number(prompt("N sonini kiriting:"));
// let M = 0;

// while (M ** 2 < N) {
//   M++;
// }
// alert("Natija: " + M);
