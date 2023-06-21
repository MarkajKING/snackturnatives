const message = document.querySelector("#message")
const fileButton = document.querySelector("#file")
const img = document.querySelector("#img")
checkButton = document.querySelector("#checkButton")
let dataResults = [];

//show the extra information in popup screen
let extraInfoButton = document.getElementById("extraInformation")
if (extraInfoButton !== null){
    extraInfoButton.addEventListener("click", ev => showExtraInfo(ev))
}

//get data from dataset
function loadData() {
    Papa.parse("./data/Candy&Sweets.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => prepareData(results.data)
    })
}

//save data globally
function prepareData(results) {
    dataResults = results
}



//area for extra info button
function showExtraInfo(ev){

}

fileButton.addEventListener("change", event => loadFile(event))
img.addEventListener("load", () => userImageUploaded())
checkButton.addEventListener("click", (ev) => checkHandler(ev))


// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('./model/model.json', './model/model.weights.bin', modelLoaded);


function loadFile(event) {
    img.src = URL.createObjectURL(event.target.files[0])
}

function userImageUploaded() {
    message.innerHTML = "Image was loaded!"
}

//make button to check alternative
function checkHandler(ev){
    classifier.classify(img, (err, results) => {
        turnHandler(results[0].label);

    });
}

// When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
    message.innerHTML = "Please upload an image of a snack you want to turn!"
}

function turnHandler(result){
    message.innerHTML = `I think it's: ${result}!`
    console.log(result)
    let snackModal = new bootstrap.Modal('#snackModal');
    if (result === "chips"){
        cardMaker("protein chips")
    } else if (result === "bar"){
        cardMaker("protein bar")
    } else if (result == "tapas"){
        cardMaker("protein tapas")
    }

}
//make card with the turned snack
function cardMaker(title){
    if (title === "protein chips"){
        location.href="chips.html"
    } else if (title === "protein bar"){
        location.href="bar.html"
    } else if (title === "protein tapas"){
        location.href="tapas.html"
    }
}

loadData()



