// // 4️⃣ Foydalanuvchi rasm yuklaydi → rasmni compress qilish → serverga upload

// function uploadImage(){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//            let image = "mountain.jpg";
//            console.log("Rasm yuklandi:", image);
//            resolve(image);
//        }, 2000);
//    }); 
// }

// function compressImage(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let compressedImage = "compressed_mountain.jpg";
//             console.log("Rasm siqildi:", compressedImage);
//             resolve(compressedImage);
//         }, 2000);
//     });
// }

// function sendToServer(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let serverResponse = "Image uploaded to server";
//             console.log(serverResponse);
//             resolve(serverResponse);
//         }, 2000);
//     });
// }

// uploadImage()
// .then(compressImage)
// .then(sendToServer)
// .then(function(result){
//     console.log("Yakuniy natija:", result);

// }   );

// // 6️⃣ Mahsulot qo‘shish → narxini tekshirish → bazaga saqlash
// function addProduct(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("1) Mahsulot qo‘shildi:", name);
//             resolve({ name, price: null });
//         }, 1000);
//     });
// }

// function checkPrice(product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randomPrice = Math.floor(Math.random() * 100) + 1;

//             console.log("2) Narx tekshirildi:", randomPrice);

//             product.price = randomPrice;
//             resolve(product);
//         }, 1000);
//     });
// }

// function saveToDatabase(product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3) Bazaga saqlandi:", product);
//             resolve("Tayyor!");
//         }, 1000);
//     });
// }


// addProduct("Telefon")
//     .then(checkPrice)
//     .then(saveToDatabase)
//     .then(result => console.log(result))
//     .catch(err => console.log("Xatolik:", err));


// 8️⃣ Chat tizimi: xabar jo‘natish → xabarni serverdan tasdiqlash → UI ga qo‘shish
function sendMessage(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1) Xabar jo‘natildi:", text);
            resolve({ text, status: "sent" });
        }, 1000);
    });
}

function confirmFromServer(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("2) Server xabarni tasdiqladi");
            message.status = "confirmed";

            resolve(message);
        }, 1000);
    });
}

function addToUI(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3) UI ga qo‘shildi:", message);
            resolve("Chat tayyor!");
        }, 1000);
    });
}


sendMessage("Salom, yaxshimisiz?")
    .then(confirmFromServer)
    .then(addToUI)
    .then(result => console.log(result))
    .catch(err => console.log("Xatolik:", err));
                                    