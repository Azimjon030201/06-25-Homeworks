const path = require('path');
const fs = require('fs');


// 1️⃣ Topshiriq: Fayl yaratish
// fs.mkdir(path.join(__dirname, 'data'), { recursive: true }, (err) => {
//     if (err) throw err;

//     fs.writeFile(
//         path.join(__dirname, 'data', 'info.txt'),
//         "Node.js FS module — file created successfully!",
//         (err) => {
//             if (err) throw err;
//             console.log("info.txt fayli yaratildi va yozildi");
//         }
//     );
// });


// // 2️⃣ Topshiriq: Faylni o‘qish
// fs.readFile(path.join(__dirname, 'data', 'info.txt'), 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log("Fayl o'qildi:", data);
// });


// // 3️⃣ Topshiriq: Faylga qo‘shimcha matn yozish
// fs.appendFile(path.join(__dirname, 'data', 'info.txt'), "\nThis text was appended later.", (err)=>{
//     if (err) throw err;
//     console.log("Faylga qo'shimcha matn yozildi");
// });


// // 4️⃣ Topshiriq: Fayl nomini o‘zgartirish
// fs.rename(path.join(__dirname, 'data', 'info.txt'), path.join(__dirname, 'data', 'details.txt'), (err) => {
//     if (err) throw err;
//     console.log("Fayl nomi o'zgartirildi: details.txt ga");
// });



// // 5️⃣ Topshiriq: Faylni o‘chirish
// fs.unlink(path.join(__dirname, 'data', 'details.txt'), (err) => {
//     if (err) throw err;
//     console.log("Fayl o'chirildi");
// });uire('path');
// const fs = require('fs');


// // 6️⃣ Topshiriq: JSON bilan ishlash
// let student ={
//     name: "Azimjon",
//     age: 24,
//     skills: ["JS", "Node", "HTML"]
// }
// let jsonData = JSON.stringify(student);
// fs.writeFile(path.join(__dirname, "data", "student.json"), jsonData, (err)=>{
//     if (err) throw err;
//     console.log("student: " + jsonData)
// })
