// let a = 10
// var b = 10
// while(b<11){
//     b++;
//     console.log(b);
// }
// console.log();


// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }
}
// let a = outer();
// a();
// a();
// a();
// a();
// a();

// function kopaytirish (a){
//     return function hisobla(b){
//         console.log (a*b);
//     }   
// }


function outer(){
    let parol = "1234";
    function inner(p){
        if (p === parol){
            console.log("xush kelibsiz");
        }   
} return inner;
}
let a = outer();
a("1234");
a("4321");
a("1111");