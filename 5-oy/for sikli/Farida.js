// For N -2

// let A = prompt("A sonini kiriting :");
// let B = prompt("B sonini kiriting:");


// if (A < B) {
//   for (let i = A; i <= B; i++) {
//     console.log(i);
    
//   }
// }
// For N -3
// let A = prompt("A sonini kiriting :");
//  let B = prompt("B sonini kiriting:");


//  if (A < B) {
//   for (let i = B-1; i >A; i--) {
//     console.log(i);
    
//  }
//  }
// For N-5
// let Kg = prompt("1 kg un narxini kiriting (so'mda):");
// console.log("Un narxlari kamayish tartibida (so'mda):");

// for (let gram = 3800; gram >= 200; gram -= 200) {
//   let price = (Kg * gram / 1000).toFixed(2);
//   console.log(gram + " g = " + price + " som");
// }
// For N -6
// let A = prompt("A sonini kiriting :");
// let B = prompt("B sonini kiriting:");
// let  sum = 0


// if (A < B) {
//   for (let i = A; i < B; i++) {
//     sum +=i;
//    }
//    console.log("A va B sonlar  yig'indisi:sum");
//  } 

// For N -7
//  let A = prompt("A sonini kiriting :");
// let B = prompt("B sonini kiriting:");
// let sum =0

//  if (A < B) {
//   for (let i = A; i <= B; i++) {
//     sum  +=i
    
//    }
//    console.log("A va B orasidagi sonlar yig'indisi:sum");
  
//  }
///////////////////////////////////////////////////////////
// N - 1: GetLength(str).
// function getLength(str) {
//     return str.length;
//   }
//   console.log(getLength("JavaScript")); 
// N - 2 Find Max(arr).
// function findMax(arr ){
//     arr = [2,8,5,10];
//     return Math.max(arr);
// }
// console.log(findMax(arr));
  // N - 3 Reverse String(str)
//   function reverseString (str){
//     return str.split('').reverse().join('');
//   }
//   console.log(reverseString("Salom"));
//  N - 5  checkNumber
// function checkNumber(num ){
//     if (num>0)return "Musbat";
//     else if(num < 0) return "Manfiy";
//     else return "Nol"
// }
// console.log(checkNumber(-5));
//  N -6 Karkulyator
// function karkulyatorYosh(TugilganYil,HozirgiYil){
//     return HozirgiYil - TugilganYil ;
// }
// console.log(karkulyatorYosh(1995,2025));
// N - 7 
// function countWords(sentence){
//     return sentence.trim().split(/\s+/).length;
// }
// console.log( countWords("Men bugun darsga bordim"));

// class User{
//     constructor(name,age,email){
//      this.name = name;
//      this.age = age;
//      this.email = email;
//      this.isOnline = false;
//      this.type = "User";
//     }
//     login (){
//         this.isOnline = true;
//         console.log(this.name,"Web saytga kirdi");
//     }
//     logout(){
//         this.isOnline = false;
//         console.log(this.name,"Web saytdan chiqdi"); 
//     }
//     getInfo(){
//         return `${this.name}ning yoshi ${this.age} va emaili ${this.email}`
//     }
// }
// let userOne = new User("Azimjon",24,"azimjon@gmail.com")


// console.log(userOne);
// userOne.login()
// console.log(userOne);
// userOne.logout()
// console.log(userOne);
// console.log(userOne.getInfo());

// let userTwo = new User("Farida",30, "farida@gmail.com");

// console.log(userTwo.getInfo());




