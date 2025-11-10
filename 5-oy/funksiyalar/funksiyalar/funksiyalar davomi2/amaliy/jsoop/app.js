// 1 class Rectangle {
//   constructor(sideA, sideB) {
//     this.sideA = sideA
//     this.sideB = sideB
//   }
//   getArea(){return this.sideA*this.sideB}
//   getPerimeter(){return (this.sideA + this.sideB) *2}
// }
// class Circle {
//   constructor(radius) {
//     this.radius = radius
//   }
//     getArea() {
//     return Math.PI * Math.pow(this.radius, 2)
//     }
//     getPerimeter() {
//     return 2 * Math.PI * this.radius
//     }
// }
// console.log(new Circle(11).getArea()) // 380.132711084365
// console.log(new Circle(4.44).getPerimeter()) // 27.897342763877365

// 2 class Rectangle {
//   constructor(x, y, width, height) {
//     this.x = x
//     this.y = y
//     this.width = width
//     this.height = height
//   }
//     toString() {
//       return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
//     }
// }
// const rect = new Rectangle(1, 2, 3, 4)
// console.log(rect.toString()) // [x=1, y=2, width=3, height=4]

// 3 class OnesThreesNines {
//   constructor(number) {
//     this.number = number
//     this.nines = Math.floor(this.number / 9)
//     this.threes = Math.floor((this.number % 9) / 3)
//     this.ones = this.number - this.nines * 9 - this.threes * 3
//   }
// }

// let n1 = new OnesThreesNines(5)
// console.log(n1.nines) // ➞ 0
// console.log(n1.ones) // ➞ 5
// console.log(n1.threes) // ➞ 1
 
// 4 class Name {
//   constructor(fname, lname) {
//     this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase()
//     this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase()
//   }
//     get fullname() {
//     return `${this.fname} ${this.lname}`
//     }
//     get initials() {
//     return `${this.fname.charAt(0)}.${this.lname.charAt(0)}`
//     }
// }

// let a1 = new Name("john", "SMITH")
// console.log(a1.fname) // ➞ "John"
// console.log(a1.lname) // ➞ "Smith"
// console.log(a1.fullname) // ➞ "John Smith"
// console.log(a1.initials) // ➞ "J.S"

// 5 class User {
//     static userCount = 0;
    
//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }
// }

// let u1 = new User("johnsmith10");
// console.log(User.userCount); // 1
// let u2 = new User("marysue1989");
// console.log(User.userCount); // 2
// let u3 = new User("milan_rodrick");
// console.log(User.userCount); // 3

// console.log(u1.username); // johnsmith10
// console.log(u2.username); // marysue1989 
// console.log(u3.username); // milan_rodrick

