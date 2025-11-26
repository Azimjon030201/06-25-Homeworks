// 4
  function uploadImage(image) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let imageData = image;
            imageData.status = "uploaded";
            resolve(imageData)
        }, 2000)
    })
}

function compressImage(image) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let compressedImage = image;
            compressedImage.compressed = true;
            resolve(compressedImage)
        }, 2000)
    })
}

function sendToServer(image) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let serverResponse = image;
            serverResponse.serverStatus = "success";
            resolve(serverResponse)
        }, 2000)
    })
}

uploadImage({ fileName: "photo.jpg" })
.then(compressImage)
.then(sendToServer)
.then(function (result) { console.log("rasm serverga yuklandi", result); })



// 6
 function addProduct(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productData = product;
            productData.added = true;
            resolve(productData)
        }, 2000)
    })
}

function validatePrice(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let priceData = product;
            priceData.priceValid = true;
            resolve(priceData)
        }, 2000)
    })
}

function saveToDatabase(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dbResponse = product;
            dbResponse.saved = true;
            resolve(dbResponse)
        }, 2000)
    })
}

addProduct({ name: "laptop", price: 500 })
.then(validatePrice)
.then(saveToDatabase)
.then(function (result) { console.log("mahsulot bazaga saqlandi", result); })



// 8
 function sendMessage(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let payload = Object.assign({}, message);
            payload.sent = true;
            payload.messageId = Date.now();
            resolve(payload);
        }, 2000);
    });
}

function confirmMessage(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let confirmed = Object.assign({}, message);
            confirmed.confirmed = true;
            confirmed.serverStatus = "delivered";
            resolve(confirmed);
        }, 2000);
    });
}

function renderMessage(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let uiItem = Object.assign({}, message);
            uiItem.rendered = true;
            resolve(uiItem);
        }, 2000);
    });
}

sendMessage({ text: "Salom! Bu test xabar." })
    .then(confirmMessage)
    .then(renderMessage)
    .then(function (result) { console.log("Xabar jarayoni yakunlandi:", result); });