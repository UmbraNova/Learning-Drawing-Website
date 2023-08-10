var cars = [
    "Aston Martin", 
    "Opel", 
    "Dacia", 
    "Lada", 
    "Maserati", 
    "Ferarri", 
    "Porsche", 
    "Audi", 
    "Skoda", 
    "Mazda", 
    "BMW", 
    "Mercedes-Benz", 
    "Bentley", 
    "Seat", 
    "Rolls-Royce", 
    "Ford"
].sort();

cars.push("Renault");

var temp = "";

for(var i = 0; i < cars.length; i++) {
    temp += cars[i] + "<br>";
}

document.getElementById("p2").innerHTML = temp;
// ===== Changing a specific p tag using a loop END

// ===== Add new content to an empty p tag START
function addNewContent() {

    var paraTag = document.createElement("p");
    var theNode = document.createTextNode("The text that should be here is now gone and EVERYONE is fired!");
    paraTag.appendChild(theNode);

    var targetDiv = document.getElementById("theDiv");
    targetDiv.appendChild(paraTag);
}

function domWork() {

    var targetDiv = document.getElementById("theDiv");
    targetDiv.style.backgroundColor = "black";
    targetDiv.style.fontSize = "19px";
    targetDiv.style.marginTop = "50px";
    targetDiv.style.color = "white";
    targetDiv.style.border = "solid"
    targetDiv.style.marginBottom = "180px";
    targetDiv.style.float = "right";
    targetDiv.style.width = "100px";

}
addNewContent();
domWork();
// ===== Add new content to an empty p tag END



// ===== Drawing START
var iClick = false;

function mouseDown() {
    iClick = true
}

function mouseUp() {
    iClick = false
}

var mainColorList = ["red", "green", "yellow", "orange", "blue", "pink", "purple", "rgb(58, 36, 27)", "black", "white"];
var mainColor;
var iErase = false;

function selectColor(selectedColor) {  // this changes the cursor to be brush or eraser

    mainColor = mainColorList[mainColorList.indexOf(selectedColor)];

    if(selectedColor == 'white') {
        iErase = true
        var style = document.createElement('style');
        style.innerHTML = `#bodyContainer {cursor: url("pointers/eraser.png"), auto}`;
        document.head.appendChild(style);

    } else {
        var style = document.createElement('style');
        style.innerHTML = `#bodyContainer {cursor: url("pointers/brush.png"), auto}`;
        document.head.appendChild(style);        
        iErase = false;
    }

}

var theSize = 1;  // the defaul size

function selectSize(brushSize) {

    theSize = brushSize;
    document.getElementById("sizeInfo").innerHTML = brushSize + " PX";
}

function resetCanvas() {

    document.getElementById("whiteBoard").getContext("2d").clearRect(0, 0, 2000, 1000)
}

function mainDrawing(event) {

    var canvas = document.getElementById("whiteBoard");
    var context = canvas.getContext("2d");

    if(iErase == true) {
        context.lineWidth = 100;

    } else {
        context.lineWidth = theSize;
    }

    if(iClick == false) {
        context.beginPath(event.clientX /= 1.2848, event.clientY /= 1.2848);
        context.strokeStyle = "transparent";
        context.lineCap = "butt";

    } else {
        context.strokeStyle = mainColor;
        context.lineCap = "round";
        var valY = 1.275;

        if(event.clientX < 150) {
            context.lineTo(event.clientX /= 1.7, event.clientY /= valY); 

        } else if(event.clientX < 300) {
            context.lineTo(event.clientX /= 1.4, event.clientY /= valY);

        } else if(event.clientX < 500) {
            context.lineTo(event.clientX /= 1.35, event.clientY /= valY);

        } else if(event.clientX <1000) {
            context.lineTo(event.clientX /= 1.3, event.clientY /= valY);

        } else {
            context.lineTo(event.clientX /= 1.275, event.clientY /= valY);
        }

    }

    context.stroke();
}

// ===== Drawing END






