// 1// let count = initial; 
//   return function() {
//     return ++count; 
//   };


// const liftCounter = createCounter();
// console.log(liftCounter()); 
// console.log(liftCounter()); 


// const fromTen = createCounter(10);
// console.log(fromTen()); 

// 2// let secret = initial; 
 
//   return {
//     show() {               
//       return secret;
//     },
//     change(newSecret) {    
//       secret = newSecret;
//     }
//   };



// const store = createSecretStore('s3cr3t');
// console.log(store.show()); 
// store.change('yangi-parol');
// console.log(store.show());
// console.log(store.secret); 


// 3// function createMultiplier(rate) {
//   const r = Number(rate);
//   if (!Number.isFinite(r)) throw new TypeError('rate must be a finite number');
//   return function(amount) {
//     const a = Number(amount);
//     if (!Number.isFinite(a)) throw new TypeError('amount must be a finite number');
//     return a * r;
//   };
// }

// const usdToUzs = createMultiplier(12000);
// console.log(usdToUzs(5));    // 60000
// console.log(usdToUzs(2.5));  // 30000



// 4// function createPasswordChecker(initialPassword) {
//   const secret = String(initialPassword);
//   return function(attempt) {
//     return String(attempt) === secret ? "to'g'ri" : "xato";
//   };
// }


// const check = createPasswordChecker('s3cr3t');
// console.log(check('s3cr3t')); // "to'g'ri"
// console.log(check('wrong'));  // "xato"




// function safeEqual(a, b) {
//   a = String(a);
//   b = String(b);
//   if (a.length !== b.length) return false;
//   let res = 0;
//   for (let i = 0; i < a.length; i++) {
//     res |= a.charCodeAt(i) ^ b.charCodeAt(i);
//   }
//   return res === 0;
// }

// function createPasswordCheckerSafe(initialPassword) {
//   const secret = String(initialPassword);
//   return function(attempt) {
//     return safeEqual(attempt, secret) ? "to'g'ri" : "xato";
//   };
// }


// const safeCheck = createPasswordCheckerSafe('s3cr3t');
// console.log(safeCheck('s3cr3t')); // "to'g'ri"
// console.log(safeCheck('wrong'));  // "xato"


// 5// function createAccumulator(initial = 0) {
//   let total = Number(initial);
//   if (!Number.isFinite(total)) total = 0;

//   return function(value = 0) {
//     const v = Number(value);
//     if (!Number.isFinite(v)) throw new TypeError('value must be a finite number');
//     total += v;
//     return total;
//   };
// }


// const cartTotal = createAccumulator(0);
// console.log(cartTotal(100)); // 100
// console.log(cartTotal(50));  // 150
// console.log(cartTotal(25.5));// 175.5




// 6// function createLimitedCounter(limit) {
//   if (!Number.isFinite(limit) || limit < 1) throw new TypeError('limit musbat butun son bo\'lishi kerak');
//   let count = 0;
//   let finished = false;

//   return function() {
//     if (finished) return "limitga yetdi";
//     count += 1;
//     if (count >= limit) {
//       finished = true;    
//     }
//     return count;
//   };
// }
// const discountCounter = createLimitedCounter(5);
// console.log(discountCounter()); // 1
// console.log(discountCounter()); // 2
// console.log(discountCounter()); // 3
// console.log(discountCounter()); // 4
// console.log(discountCounter()); // 5   (oxirgi ruxsat)
// console.log(discountCounter()); // "limitga yetdi"
// console.log(discountCounter()); // "limitga yetdi"


// 7// function createFunctions(n) {
//   const funcs = [];
//   for (let i = 1; i <= n; i++) {
//     funcs.push(function() {
//       return i; 
//     });
//   }
//   return funcs;
// }
// const list = createFunctions(3);
// console.log(list[0]()); // 1
// console.log(list[1]()); // 2
// console.log(list[2]()); // 3


// 8// function createTimer() {
//   let start = null;
//   return function() {
//     if (start === null) {
//       start = Date.now();
//       return 0; 
//     }
//     return Date.now() - start; 
//   };
// }

// const timer = createTimer();
// console.log(timer());        
// setTimeout(() => console.log(timer()), 1500);// 9// function createList(initial = []) {
//   const items = Array.isArray(initial) ? initial.slice() : [];

//   return {
//     add(item) {
//       items.push(item);
//       return items.length;
//     },
//     getAll() {
//       return items.slice(); 
//     }
//   };
// }


// const names = createList(['Ali']);
// names.add('Vali');            
// console.log(names.getAll());  


// 10// function ballOyinchi() {
//   let ball = 0; 

//   return {
//     ballQosh: function (qiymat) {
//       ball += qiymat;
//       console.log("${qiymat} ball qo‘shildi. Jami: $ {ball}");
//     },
//     ballKorsat: function () {
//       console.log("Joriy ball; ${ball}");
//     },
//     qaytaBoshlash: function () {
//       ball = 0;
//       console.log(" O‘yin qayta boshlandi. Ball nolga tushdi.");
//     }
//   };
// }


// const oyinchi = ballOyinchi();

// oyinchi.ballQosh(10);    
// oyinchi.ballQosh(5);      
// oyinchi.ballKorsat();     
// oyinchi.qaytaBoshlash();  
// oyinchi.ballKorsat();