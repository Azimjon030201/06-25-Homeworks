// function hello (ism){
//     console.log("Hello ",ism);
// }
// hello( "Nargiza");
// hello ("Sug'diyona");
// function Sum(a,b){
//     return a + b
//     a * b
// }
// let s = Sum(5,6);
// console.log(s);
///////////////////////
// let arr = [5,8,12,7,3,18]
// function SumArr(array){
//     let result = 0
//     for (const item of array){
//         result = result + item *2
//     }
//     return result
// }
// console.log(SumArr(arr));
////////////////////////
// function darajaUch(a){
    
//     return  a **3;
// }
// let raqam  = 5
// console.log("natija " +darajaUch (raqam));
// function daraja(a){
    
//     return  a **2;
// }
// let a = 5
// let b = 9 
// console.log("natija " +daraja (a));
// console.log("natija " +daraja (b));
////////20.10.2025//////////////////
// let arr = [3,8,5,4,6,7]
// let arr2 = arr1
// arr1[0]=12
// console.log(arr2);
// function addTwo(a,b){
//     return a + b;

// }
// let mult = (a,b)=> a*b;
// mult(5,6)
// let len =(str)=>str .length
// console.log(len('Behzod'));
// let  max =(arr)=>{
//     let result = -Infinity
//     for (const element of arr){
//         if (element>result){
//             result = element
//         }
//     }
//     return result;
// }
// console.log(max [2,8,5,10]);
// let a =  (parametr)=>{return}
// let sum = (a,b)=>a +b 
// let age = (birth,curr)=> curr- birth
// console.log(age(2010,2025));
// var z = 89;
// function print(){
 
//     var z = 10;
//     console.log(z); // 10
// }
// print(); // 10
// console.log(z); //

// function displayZ(){
  
//     var z = 20;
     
//     {
//         var z = 30; // Не определяет новую переменную, а изменяет значение переменной z уровня функции
//         console.log("Block:", z);
//     }
//     console.log("Function:", z);
// }
// displayZ();
// console.log(z);

// z = 10;
// function displayZ(){
//     z = 20;
//     {
//         z = 30;
//         console.log("Block:", z);
//         {
//             z=40
//         }
//     }
//     console.log("Function:", z);
// }
// displayZ();
// console.log("Global:", z);

// function outer(){
//     let count = 0;
//     return function inner(){
//         count++
//         console.log(count);
        
//     }
// }
// let a = outer();
// a();
// a();
// a();

// function kopaytirish(a){
//     return function hisobla(b){
//         console.log(a*b)
//     }
// }
// let d = kopaytirish(5)
// d(3);
// d(6);
// d(2);

// function outer(){
//     let parol = "1234";
//     function inner(p){
//         //Logika
//     };
//     return inner;
// }
// let a = outer()
// a("4231")
// a("1111")
// a("1234")
