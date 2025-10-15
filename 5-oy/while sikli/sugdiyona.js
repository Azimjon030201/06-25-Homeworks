// // while 34

// let sonlar = [1, 3, 10, 7, 9, 11, 18, 15, 17, 19, 21, 22, 25, 20, 29, 31, 32];

// for (let i = 0; i < sonlar.length; i++) {
//   if (sonlar[i] % 2 !== 0) {
//     console.log(sonlar[i]); // Toq son
//   }
// }


// // while 35

// let chegaraviySon = Number(prompt("N ni kiriting:"));
// let hozirgiSon = 1;

// while (hozirgiSon <= chegaraviySon) {
//   if ((hozirgiSon % 10) % 3 === 0) {
//     console.log(hozirgiSon);
//   }
//   hozirgiSon++;
// }


// // while 36

// let son = 10;

// while (son < 100) {
//   let birlik = son % 10;
//   let onlik = Math.floor(son / 10);
//   let raqamYigindisi = birlik + onlik;

//   if (raqamYigindisi % 2 === 0) {
//     console.log(son);
//   }

//   son++;
// }


// // while 37

// let kiritilganSon = Number(prompt("N ni kiriting:"));
// let raqamlarSoni = 0;
// let vaqtinchalikSon = kiritilganSon;

// while (vaqtinchalikSon > 0) {
//   raqamlarSoni++;
//   vaqtinchalikSon = Math.floor(vaqtinchalikSon / 10);
// }

// console.log("Raqamlar soni:", raqamlarSoni);


// // while 38

// let kiritilganSon = Number(prompt("N ni kiriting:"));
// let raqamYigindisi = 0;
// let vaqtinchalikSon = kiritilganSon;

// while (vaqtinchalikSon > 0) {
//   raqamYigindisi += vaqtinchalikSon % 10;
//   vaqtinchalikSon = Math.floor(vaqtinchalikSon / 10);
// }

// console.log("Raqamlar yig'indisi:", raqamYigindisi);


// // while 39

// let kiritilganSon = Number(prompt("N ni kiriting:"));
// let vaqtinchalikSon = kiritilganSon;
// let mavjud = false;

// while (vaqtinchalikSon > 0) {
//   if (vaqtinchalikSon % 10 === 2) {
//     mavjud = true;
//     break;
//   }
//   vaqtinchalikSon = Math.floor(vaqtinchalikSon / 10);
// }

// console.log(mavjud ? 2 : -1);


// // while 40

// let son = Number(prompt("Natural son kiriting:"));
// let tekshirilayotganSon = son;
// let toqRaqamBor = false;

// while (tekshirilayotganSon > 0) {
//   let raqam = tekshirilayotganSon % 10;
//   if (raqam % 2 !== 0) {
//     toqRaqamBor = true;
//     break;
//   }
//   tekshirilayotganSon = Math.floor(tekshirilayotganSon / 10);
// }

// console.log(toqRaqamBor ? "I" : "-1");
