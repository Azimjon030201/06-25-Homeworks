// let a = (parametr)=>{return}
// let sum = (a,b) => a+b
// let age = (birth,curr) => curr - birth
// console.log(age(2010,2025)

//array methods
//forEach
// const numbers = [45, 4, 9, 17];
// numbers.forEach((item )=>console.log(item))//hohlasa index yozish mumkin
// //map
// let s = numbers.map((element)=> element*2)
// console.log(s);
// //flatMap
// let flatMap = numbers.flatMap((x)=>x*3)
// console.log(flatMap);
// //filter
// let filtredArr = numbers.filter((x)=> x % 2 == 0)
// console.log(filtredArr);
// //reduce
// let sum = numbers.reduce((a,b) => a + b)
// console.log(sum);
// //reduceRight
// let sum2 = numbers.reduceRight((total,item)=> total + item)
// console.log(sum2);
// //every
// let allOver18 = numbers.every((item) => item > 18)
// console.log(allOver18);//hammasi oxshasagina true chiqadi bta xatto false
// //some
// let allOve18 = numbers.sum((item) => item > 18)
// console.log(allOver18); //bittasi oxshasayam true boladi
// //keys
// let kys = numbers.keys()
// console.log(keys);//ichini aylanib chiqsa boladi

//  let kiys = numbers.keys()
// for (const x in numbers){// for inda indexi chiqadi/ for off da qiymati
// console.log(x);
// }
//  let keys = numbers.keys()
// for (const x of keys){
// console.log(x);
// }
// //entries
// let entries = numbers.enteries()
// console.log(entries);
// for(const element of entries){
// console.log(element);

// }
// //indexOf
// let number2 = [16,2,12,63,16]
// let index = numbers.indexOf(16,3)
// console.log(index);
// //LastIndexOf
// let index2 = number2.lastIndexOf(16)
// console.log(index2);
// //includes
// let element = number2.includes(5)
// console.log(element);
// // find
//  let  juft = number2.find((x)=>x%2==1)
// console.log(juft);

// //findIndex
// let toqIndex = number2.findIndex((x)=>x % 3 ==0)
// console.log(toqIndex);//bolinadigan sonlarni topib beradi


// let studentlar = [
//     {
//         ismi: "Diyor",
//         sinfi: 8,
//         yoshi: 14,
//         maktab: 5
//     },
//     {
//         ismi: "Sardor",
//         sinfi: 10,
//         yoshi: 16,
//         maktab: 5
//     },
//     {
//         ismi: "Behzod",
//         sinfi: 9,
//         yoshi: 15,
//         maktab: 19
//     },
//     {
//         ismi: "Xurshid",
//         sinfi: 8,
//         yoshi: 14,
//         maktab: 19
//     },
//     {
//         ismi: "Sugdiyona",
//         sinfi: 10,
//         yoshi: 16,
//         maktab: 4
//     },
//     {
//         ismi: "Nargiza",
//         sinfi: 9,
//         yoshi: 15,
//         maktab: 18
//     },
// ]
// let maktab5 = studentlar.filter((x) =>x.maktab == 5 )
// for (const element of maktab5) {
//     console.log(element.ismi);
    

 // var userOne = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };


// console.log(userOne,name);



// var userOne = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userTwo = {
//     email: 'yoshi@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userThere = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };


// userOne.name = 'Yoshi';



// class User {

// }





// var userOne = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userTwo = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userThere = {
//     email: 'ryu@ninja.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userFour = new User()
// 1-misol
// class AddUp {
//   constructor(n) {
//     this.n = n;
//   }

//   getResult() {
//     let sum = 0;
//     for (let i = 1; i <= this.n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// }

// const ex1 = new AddUp(4);
// console.log(ex1.getResult()); // 10

// // 2-misol
// class SortByLength {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   getSorted() {
//     return this.arr.sort((a, b) => a.length - b.length);
//   }
// }

// const ex2 = new SortByLength(["apple", "hi", "car"]);
// console.log(ex2.getSorted());

// // 3-misol
// class LargestEven {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   getLargestEven() {
//     let evens = this.arr.filter(num => num % 2 === 0);
//     return evens.length ? Math.max(...evens) : -1;
//   }
// }

// const ex3 = new LargestEven([3, 7, 8, 2]);
// console.log(ex3.getLargestEven()); // 8
// // 4-misol
// class TypingGame {
//   constructor(correct, typed) {
//     this.correct = correct;
//     this.typed = typed;
//   }

//   check() {
//     return this.typed.map((word, i) =>
//       word === this.correct[i] ? 1 : -1
//     );
//   }
// }

// const ex4 = new TypingGame(["cat", "blue", "skt"], ["cat", "blu", "skt"]);
// console.log(ex4.check()); 

// // 5-misol
// class VoteCount {
//   constructor(upvotes, downvotes) {
//     this.upvotes = upvotes;
//     this.downvotes = downvotes;
//   }

//   getResult() {
//     return this.upvotes - this.downvotes;
//   }
// }

// const ex5 = new VoteCount(10, 3);
// console.log(ex5.getResult()); // 7

