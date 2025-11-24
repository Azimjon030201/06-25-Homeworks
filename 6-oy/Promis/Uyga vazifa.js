const delay = ns =>{
    return new Promise(r => setTimeout(() =>r(),ns))
}
 delay (2000).then(() => console.log('2sec'))
 const url = 'https://jsonplaccholder.typicode.com/todos'

 function fetchTodos(){
    console.log('Fetch todo started...');
    return delay(2000)
    .then(() => {
        return fetch(url)

    })
    .then(response => response.json())
 }

 fetchTodos()
 .then(data =>{a
    console.log('Data:',data);
 })
 .catch(e => console.error(e));
async function  fetchAsyncTodos (){
    console.log('Fetch todo started...');
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log( 'Data:',data);

    
}
fetchAsyncTodos()

async function  fetchAsyncTodos (){
    console.log('Fetch todo started...');
    try{
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log( 'Data:',data);
} catch(e){
    console.error(e);
}


    
}
fetchAsyncTodos()
/////////////////////////////////////
//Objects
// const person = {
//     name:'Vladilen',
//     age:25,
//     job: 'Fullstack'

// }
// const op = new Proxy(person, {
// get(target,prop ) {
//  console.log('Target',target);
//  console.log('Prop',prop);
//  return target[prop]
// },
// set(target,prop,value){
// if (prop in target){
//     target[prop ]= value
// }else{
//     throw new Error('No ${prop}field in target')
// }
// },
// has(target,prop){
//     return['age','job'],includes(prop)
// },
// deleteProperty(target,prop){
//     console.log('Deleting ...',prop);
//     delete target[prop]
//     return true
// }

// })


        
   