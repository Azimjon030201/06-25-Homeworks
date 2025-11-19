// 1-misol
class Player {
  constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
  }
  
  getAge() {
    return `${this.name} is age ${this.age}`;
  }

  getHeight() {
        return `${this.name} is ${this.height}cm tall`;
  }
    
  getWeight() {
    return `${this.name} weighs ${this.weight}kg`;
  }
}    
let player1 = new Player("Sardor", 25, 180, 75);
console.log(player1.getAge());
console.log(player1.getHeight());
console.log(player1.getWeight());
let player2 = new Player("Sarvar", 22, 170, 60);
console.log(player2.getAge());
console.log(player2.getHeight());
console.log(player2.getWeight());
let player3 = new Player("Behzod", 30, 185, 85);
console.log(player3.getAge());
console.log(player3.getHeight());
console.log(player3.getWeight());
let player4 = new Player("Jamshid", 28, 165, 55);
console.log(player4.getAge());
console.log(player4.getHeight());
console.log(player4.getWeight());

// 2-misol
 class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Nolga bo'lish xatosi";
    }
    return a / b;
  }
}
let calc = new Calculator();
console.log(calc.add(10, 5));        
console.log(calc.subtract(10, 5));   
console.log(calc.multiply(10, 5));   
console.log(calc.divide(10, 5));     
console.log(calc.divide(10, 0));     

// 3-misol
 
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `[x=${this.x}, y=${this.y}]`;
    }
}
let point = new Point(1, 2);
console.log(point.toString());

// 4-misol
class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = false;
  static hasUHD = false;
  static price = '$8.99';
}
class StandardPlan extends BasicPlan {
    static numOfDevices = 2;
    static hasHD = true;
    static price = '$13.99';
}
class PremiumPlan extends StandardPlan {
    static numOfDevices = 4
    static hasUHD = true;
    static price = '$17.99';
}
console.log('Basic Plan:');
console.log(`Can Stream: ${BasicPlan.canStream}`);
console.log(`Can Download: ${BasicPlan.canDownload}`);

// 5-misol
class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${firstname} ${lastname}`;
    this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`;
  }
}

let emp1 = new Employee("John", "Smith");
console.log(emp1.fullname); 

let emp2 = new Employee("Mary", "Sue");
console.log(emp2.email); 

let emp3 = new Employee("Antony", "Walker");
console.log(emp3.firstname);
