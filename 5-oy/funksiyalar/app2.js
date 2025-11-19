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


// function outer(){
//     let parol = "1234";
//     function inner(p){
//         if (p === parol){
//             console.log("xush kelibsiz");
//         }   
// } return inner;
// }
// let a = outer();
// a("1234");
// a("4321");
// a("1111");



//array methods


//forEach
// const numbers = [45, 4, 9, 17];
// numbers.forEach((item )=>console.log(item))
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
// let sum2 = numbers.reduceRight((a,b) => a + b)
// //every
// let allOver18 = numbers.every((item) => item  > 18)
// console.log(allOver18);
// //some
// let allOver18 = numbers.every((item) => item  > 18)
// console.log(allOver18);
// //keys
// let keys = numbers.keys();
// for ( const x of keys){
//     console.log(x);
// }
// //entries
// let entries = numbers.entries();
// console.log(entries);
// for ( const element of entries){
//     console.log(element);

// }
// //indexOf
// let number2 =[16, 2, 12, 63, 16, 16]
// let index = numbers.indexOf(16)
// console.log(index);

// //lastIndexOf
// let Index2 = number2.lastIndexOf(16)
// console.log(Index2);
// //includes
// let element= number2.includes(5)
// console.log(element);
// //find




let studentlar = [
    {
        ismi: "Diyor",
        sinfi: 8,
        yoshi: 14,
        maktab: 5
    },
    {
        ismi: "Sardor",
        sinfi: 10,
        yoshi: 16,
        maktab: 5
    },
    {
        ismi: "Behzod",
        sinfi: 9,
        yoshi: 15,
        maktab: 19
    },
    {
        ismi: "Xurshid",
        sinfi: 8,
        yoshi: 14,
        maktab: 19
    },
    {
        ismi: "Sugdiyona",
        sinfi: 10,
        yoshi: 16,
        maktab: 4
    },
    {
        ismi: "Nargiza",
        sinfi: 9,
        yoshi: 15,
        maktab: 18
    },
]
let maktab5 = studentlar.filter((x) =>x.maktab == 5 )
for (const element of maktab5) {
    console.log(element.ismi);
    
}
