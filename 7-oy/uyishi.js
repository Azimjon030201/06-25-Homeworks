const path = require('path');
const fs = require('fs');
// // 1️⃣ Topshiriq: Fayl yaratish
// // Vazifa: data nomli papka yarating (agar bo‘lmasa). Papka ichida info.txt degan fayl yarating. Fayl ichiga quyidagi matnni yozing: "Node.js FS module — file created successfully!"
// fs.mkdir(path.join(dirname, 'data'), { recursive: true }, (err) => {
//     if (err) throw err;

//     fs.writeFile(
//         path.join(dirname, 'data', 'info.txt'),
//         "Node.js FS module — file created successfully!",
//         (err) => {
//             if (err) throw err;
//             console.log("info.txt fayli yaratildi va yozildi");
//         }
//     );
// });


// // 2️⃣ Topshiriq: Faylni o‘qish
// // Vazifa: Yuqorida yaratgan info.txt faylini o‘qing. Konsolda kontentni chiqaring.
// fs.readFile(path.join(dirname, 'data', 'info.txt'), 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log("Fayl o'qildi:", data);
// });


// // 3️⃣ Topshiriq: Faylga qo‘shimcha matn yozish
// // Vazifa: info.txt fayliga qo‘shimcha qilib: "This text was appended later." matnini yozing.
// fs.appendFile(path.join(dirname, 'data', 'info.txt'), "\nThis text was appended later.", (err)=>{
//     if (err) throw err;
//     console.log("Faylga qo'shimcha matn yozildi");
// });


// // 4️⃣ Topshiriq: Fayl nomini o‘zgartirish
// // Vazifa: info.txt faylini details.txt nomiga o‘zgartiring.
// fs.rename(path.join(dirname, 'data', 'info.txt'), path.join(dirname, 'data', 'details.txt'), (err) => {
//     if (err) throw err;
//     console.log("Fayl nomi o'zgartirildi: details.txt ga");
// });



// // 5️⃣ Topshiriq: Faylni o‘chirish
// // Vazifa: details.txt faylini o‘chiring.
// fs.unlink(path.join(dirname, 'data', 'details.txt'), (err) => {
//     if (err) throw err;
//     console.log("Fayl o'chirildi");
// });uire('path');
// const fs = require('fs');


// // 6️⃣ Topshiriq: JSON bilan ishlash
// // Vazifa: user.json fayli yarating. Ichiga quyidagi obyektni JSON ko‘rinishda yozing: {"name": "Azimjon","age": 24,"skills": ["JS", "Node", "HTML"]}
// let student ={
//     name: "Azimjon",
//     age: 24,
//     skills: ["JS", "Node", "HTML"]
// }
// let jsonData = JSON.stringify(student)

// fs.writeFile(path.join(dirname, "data", "student.json"), jsonData, (err)=>{
//     if (err) throw err;
//     console.log("student: " + jsonData)
// })