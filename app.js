const gridContainer = document.querySelector("#gridContainer");
const gridSize = document.querySelector("#gridSize");
const containerButtons = document.querySelector("containerButtons");
const buttonGreen = document.querySelector("#green");
const buttonRed = document.querySelector("#red");
const buttonBlue = document.querySelector("#blue");

const colorGreen = "#00FF00";
const colorRed = "#ff0000";
const colorBlue = "#0000ff";
let backGroundColor;

const gridArea = 600;
let numDivs = 16;


gridContainer.style.width = `${gridArea}px`;
gridContainer.style.height = `${gridArea}px`;
gridContainer.style.backgroundColor = `coral`;

buttonGreen.addEventListener("click", (event) => {
    backGroundColor = colorGreen;
});

buttonRed.addEventListener("click", (event) => {
    backGroundColor = colorRed;
});

buttonBlue.addEventListener("click", (event) => {
    backGroundColor = colorBlue;
});

gridSize.addEventListener("click", (event) => {
    const newGridSize = prompt("Enter a number, this number represents the amount of squares you will have to draw:");
    if(newGridSize > 100){
        alert("You can not enter an number over 100, please try again");
    }
    else{
        numDivs = newGridSize;
        deleteGrid();
        createGrid();
    }
});

function createGrid(){
    let fullAmountDivs = (numDivs * numDivs);
    const widthDiv = gridArea / numDivs;
    const heightDiv = gridArea / numDivs;

    for(i = 0; i < (fullAmountDivs); i++){
        const div = document.createElement("div");
        div.style.width = `${widthDiv}px`;
        div.style.height = `${heightDiv}px`;
        //div.style.border = "1px solid black";
        gridContainer.appendChild(div);

        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = backGroundColor;
        })
    }
}

createGrid();

function deleteGrid(){
    let child = gridContainer.lastChild;
    while(child){
        gridContainer.removeChild(child);
        child = gridContainer.lastChild;
    }
}
