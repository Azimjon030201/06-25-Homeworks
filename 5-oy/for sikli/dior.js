// // while 45
// let toq = [5, 8, 1, 10, 7, 15, 18, 19, 14, 12, 28, 22, 27, 20, 29, 38, 35];
// let juft = toq % 2 == 0;
// console.log(juft);
// to'gri
// for (let i = 0; i < toq.length; i++) {
//   if (toq[i] % 2 != 0) {
//     console.log(toq[i]);
//   }else{
    // console.log("son juft");
// }
// // while 35
// let N = Number(prompt("N ni kiriting:"));
// let i = 1;
// while (i <= N) {
//   if ((i % 10) % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// }
// // while 36
// let son = 10;
// while (son < 100) {
//   let birlik = son % 10;
//   let onlik = Math.floor(son / 10);
//   let yigindi = birlik + onlik;
//   if (yigindi % 2 === 0) {
//     console.log(son);
//   }
//   son++;
// }
// // while 37
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let soni = 0;
// while (n > 0) {
//   soni++;
//   n = Math.floor(n / 10);
// }
// console.log("Raqamlar soni:", soni);
// // while 38
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let yigindi = 0;
// while (n > 0) {
//   yigindi += n % 10;
//   n = Math.floor(n / 10);
// }
// console.log("Raqamlar yig‘indisi:", yigindi);
// // while 39
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   if (n % 10 === 2) {
//     bor = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }
// console.log(bor ? 2 : -1);

// Natural N sonining raqamlari ichida toq qiymatli raqam bor bo'lsa "I", yo'q bo'lsa"-1" chiqaring.
// // while 40
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   if ((n % 10) % 2 != 0) {
//     bor = true;
//     break;
//   }

// Natural N soni berilgan (1<N<100). N soniga karrali biror uch xonali sonni aniqlang
// let N = Number(prompt("N ni kiriting (1<N<100):"));
// let found = false;
// for (let i = 100; i <= 999; i++) {
//   if (i % N === 0) {
//     console.log("Uch xonali karrali son:", i);
//     found = true;
//     // break;
//   }
// }
// if (!found) {
//   console.log("Bunday uch xonali karrali son mavjud emas.");
// }


// Natural A va B sonlari berilgan (A<B). B uzunlikdagi kesma A uzunlikdagi kesmalarga bo'lindi. Ortib qolgan kesma uzunligini aniqlang. Ko'paytirish, boʻlish va qoldiqli bo'lish amallaridan foydalanish mumkin emas.
// let A = Number(prompt("A ni kiriting (A<B):"));
// let B = Number(prompt("B ni kiriting (A<B):"));
// let count = 0;
// while (B >= A) {
//   B -= A;
//   count++;
// }
// console.log("Ortib qolgan kesma uzunligi:", B);

// Natural A va B sonlari berilgan (A<B). B uzunlikdagi kesma A uzunlikdagi kesmalar kesib olindi. Ko'pi bilan nechta kesma kesib olinganini aniqlang. Ko'paytirish, bo'lish va qoldiqli bo'lish amallaridan foydalanish mumkin emas.
// let A = Number(prompt("A ni kiriting (A<B):"));
// let B = Number(prompt("B ni kiriting (A<B):"));
// let count = 0;
// while (B >= A) {
//   B -= A;
//   count++;
// }
// console.log("Kesib olingan kesmalar soni:", count);

// Natural N va M sonlari berilgan. Faqat qo'shish va ayirish amallaridan foydalanib N sonining M ga bo'lgandagi butun va qoldiq qismlarini aniqlang.
// let N = Number(prompt("N ni kiriting (N>M):"));
// let M = Number(prompt("M ni kiriting (N>M):"));
// let butunQism = 0;
// let qoldiqQism = N;
// while (qoldiqQism >= M) {
//   qoldiqQism -= M;
//   butunQism++;
// }
// console.log("Butun qism:", butunQism);
// console.log("Qoldiq qism:", qoldiqQism);

// Natural N soni berilgan. Agar N soni 7 ning biror darajasi bo'lsa daraja ko'rsatkichini, aks holda -1 chiqaring
// let N = Number(prompt("N ni kiriting:"));
// let daraja = 0;
// let qiymat = 1; // 7 ning 0-darajasi
// while (qiymat < N) {
//   qiymat *= 7;
//   daraja++;
// }
// if (qiymat === N) {
//   console.log("N soni 7 ning darajasi, daraja ko'rsatkich:", daraja);
// } else {
//   console.log(-1);
// }





//    n = Math.floor(n / 10);
// }
// console.log(bor ? 2 : -1);

// Natural N sonining raqamlari ichida toq qiymatli raqam bor bo'lsa "I", yo'q bo'lsa"-1" chiqaring.
// // while 40
// let N = Number(prompt("N ni kiriting:"));
// let n = N;
// let bor = false;
// while (n > 0) {
//   n = Math.floor(n / 10);
// }
// console.log(bor ? 2 : -1);

// Natural N sonining raqamlari ichida toq qiymatli raqam bor bo'lsa "I", yo'q bo'lsa"-1" chiqaring.
// // while 40
// let d = Number(prompt("N ni kiriting:"));
// let v = v;
// let bor = false;
// while (n > 0) {
//   if ((n % 10) % 2 != 0) {
//     bor = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }
// console.log(bor ? 1 : -1);


















// // for 1
// let K = Number(prompt("Haqiqiy son K ni kiriting:"));
// let N = Number(prompt("Natural son N ni kiriting:"));

// for (let i = 1; i <= N; i++) {
//   console.log(K.toFixed(2));
// }
// // for 2
// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting (A dan katta bo‘lsin):"));

// for (let i = A; i <= B; i++) {
//   console.log(i);
// }
// // for 3
// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting (A dan katta bo‘lsin):"));

// for (let i = B; i >= A; i--) {
//   console.log(i);
// }
// // for 4
// let son = Number(prompt("1 kg narxni kiriting:"));

// for (let i = 1; i <= 10; i++) {
//   console.log(i + " kg = " + (son * i).toFixed(2));
// }
// // for 5
// let soni = Number(prompt("1 kg narxni kiriting:"));

// for (let i = 0.2; i <= 1; i += 0.2) {
//   console.log(i.toFixed(1) + " kg = " + (soni * i).toFixed(2));
// }






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
            console.log("tohri");
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

cart(150); 
cart(200); 
cart(300);  

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

nameList.addName("all");
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
            console.log("nol bal.");
        }
    };
}

let gameScore = createGameScore();

gameScore.addScore(10);
gameScore.addScore(20);
gameScore.resetScore();

let c = {
  name: "dior",
  surname: "babaev",
  age: 15
}
const b = "dior"
let a = prompt("Son kiriting")

if () {
} else {
}
