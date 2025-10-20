// function Hello(name){
//     console.log("Hello" , name);
// }
// Hello("sugdiyona");
// Hello("nargiza");
// Hello("faridaOpa");
// Hello("leeSooho");
// Hello("IKROM");

function Sum(a, b){
    return a + b;
    a*b;
}
let s = Sum(5, 6);
console.log(s);

let arr = [5,8,12,7,3,18,17]
function SumArr(arr){
    let result = 0;
    for (const item of arr){
        result = result + item * 2;
    }           
 return result;
}
console.log(SumArr(arr));


function indexUch(a) {
  return a ** 3; 
}

let son = 7;
console.log("Natija: " + indexUch(son));

