const gridContainer = document.querySelector("#gridContainer");

const gridArea = 600;
const rows = 16;
const cols = 16;

gridContainer.style.width = `${gridArea}px`;
gridContainer.style.height = `${gridArea}px`;
gridContainer.style.backgroundColor = `coral`;

function createGrid(){
    for(i = 0; i < (rows * cols); i++){
        const div = document.createElement("div");
        //div.style.border = "1px solid black";
        gridContainer.appendChild(div);
    }
}

createGrid();
