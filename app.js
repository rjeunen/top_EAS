const gridContainer = document.querySelector("#gridContainer");

const gridArea = 600;
const rows = 16;
const cols = 16;
const widthDiv = gridArea / rows;
const heightDiv = gridArea / cols;

gridContainer.style.width = `${gridArea}px`;
gridContainer.style.height = `${gridArea}px`;
gridContainer.style.backgroundColor = `coral`;

function createGrid(){
    for(i = 0; i < (rows * cols); i++){
        const div = document.createElement("div");
        div.style.width = `${widthDiv}px`;
        div.style.height = `${heightDiv}px`;
        div.style.border = "1px solid black";
        gridContainer.appendChild(div);

        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "blue";
        })
    }
}

createGrid();
