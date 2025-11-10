// 1-Encapsulation
class BankAccount {
  #balance = 0; 

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); 
// 2-Abstraction
class CoffeeMachine {
  start() {
    this._boilWater();
    console.log("☕ Kofe tayyor!");
  }

  _boilWater() { 
    console.log("Suv qaynamoqda...");
  }
}

let machine = new CoffeeMachine();
machine.start();

// 3-Inheritance

// class Animal {
//     eat() {
//         console.log("Hayvon ovqat yemoqda ...")
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Vov-Vov!")
//     }
// }

// let dog = new Dog();
// dog.eat()
// dog.bark()

// 4-Polymorphism
class Anime {
    speak() {
        console.log("Hayvon ovoz chiqarmoqda ...")
    }
}

class Cat extends Anime {
    speak() {
        console.log("Miyov!")
    }
}
class Dog extends Anime {
    speak() {
        console.log("Vov-vov!")
    }
}
let animals = [new Anime(), new Cat(), new Dog()]
animals.forEach(a =>a.speak())