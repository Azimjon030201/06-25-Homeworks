// 1
function createCounter() {
    let count = 0;

    return function() {
        count++; 
        console.log("Lift harakatlandi: " + count + " marta");
    };
}

let liftCounter = createCounter();


liftCounter(); 
liftCounter(); 
liftCounter(); 

// 2
function createPasswordManager(initialPassword) {
    let password = initialPassword;

    return {
        showPassword: function() {
            console.log("Parol: " + password);
        },
        changePassword: function(newPassword) {
            password = newPassword;
            console.log("Parol o'zgartirildi.");
        }
    };
}

let passwordManager = createPasswordManager("mySecret123");

passwordManager.showPassword();
passwordManager.changePassword("newPassword456");
passwordManager.showPassword(); 

// 3
function createMultiplier(initialValue) {
    let storedValue = initialValue;

    return function(multiplier) {
        let result = storedValue * multiplier;
        console.log(result);
    };
}

let currencyConverter = createMultiplier(12000);

currencyConverter(5); 
currencyConverter(10); 

// 4
function createLoginSystem(storedPassword) {
    return function(inputPassword) {
        if (inputPassword === storedPassword) {
            console.log("to'g'ri");
        } else {
            console.log("xato");
        }
    };
}

let loginSystem = createLoginSystem("myPassword");

loginSystem("myPassword"); 
loginSystem("wrongPassword"); 

// 5
function createSumAccumulator() {
    let total = 0;

    return function(value) {
        total += value;
        console.log("Umumiy summa: " + total);
    };
}

let cart = createSumAccumulator();

cart(100); 
cart(200); 
cart(50);  

// 6
function createLimitedCounter(limit) {
    let count = 0;

    return function() {
        if (count < limit) {
            count++;
            console.log("Chegirma ishlatildi: " + count + " marta");
        } else {
            console.log("Chegirma tugadi");
        }
    };
}

let discountCounter = createLimitedCounter(5);

discountCounter();
discountCounter();
discountCounter();
discountCounter();
discountCounter();
discountCounter();

// 7
function createButtonList() {
    let buttons = [];

    for (let i = 1; i <= 5; i++) {
        buttons.push(function() {
            console.log(i + "-tugma");
        });
    }

    return buttons;
}

let buttonList = createButtonList();

buttonList[0](); 
buttonList[1](); 
buttonList[2](); 
buttonList[3](); 
buttonList[4](); 

// 8
function createTimer() {
    let startTime = null;

    return function() {
        if (!startTime) {
            startTime = Date.now();
            console.log("Taymer ishga tushdi.");
        } else {
            let elapsedTime = Date.now() - startTime;
            console.log("O'tgan vaqt: " + elapsedTime + " ms");
        }
    };
}

let timer = createTimer();

timer();
setTimeout(timer, 1000); 
setTimeout(timer, 2000); 

// 9
function createNameList() {
    let names = [];
    return {
        addName: function(name) {
            names.push(name);
            console.log(name + " ro'yxatga qo'shildi.");
        },
        showNames: function() {
            console.log("Ro'yxatdagi ismlar:");
            names.forEach(function(name, index) {
                console.log((index + 1) + ". " + name);
            });
        }
    };
}

let nameList = createNameList();

nameList.addName("Ali");
nameList.addName("Vali");
nameList.showNames();

// 10
function createGameScore() {
    let score = 0;

    return {
        addScore: function(points) {
            score += points;
            console.log("Joriy ball: " + score);
        },
        resetScore: function() {
            score = 0;
            console.log("Ball nolga tushirildi.");
        }
    };
}

let gameScore = createGameScore();

gameScore.addScore(10);
gameScore.addScore(20);
gameScore.resetScore();

let c = {
  name: "Behzod",
  surname: "To'xtaqulov",
  age: 15
}
const b = "behzod"
let a = prompt("Son kiriting")

if () {
  
} else {
  
}
