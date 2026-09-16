//Create a webpage with a 16x16 grid of square divs. 
//create the divs using JS

//Elements
const container = document.querySelector("#container");
const gridSizeButton = document.querySelector("#gridSize");

//Global variables
let gridSize = 16;
let celWidthAndHeigth = 960 / gridSize;
let pixels = `${celWidthAndHeigth}px`;


//function to create the 16 by 16 grid
function createGrid(){
    for (let row = 0; row < gridSize; row++){
        for(let col = 0; col < gridSize; col++){
            //Create grid element
            const gridCel = document.createElement("div");
            gridCel.style.width = pixels;
            gridCel.style.height = pixels;
            //gridCel.style.border = `1px solid black`;
            
            gridCel.addEventListener('mouseenter', () => {
                gridCel.classList.add('hoverEffect');
            });
            container.appendChild(gridCel);
        }
    }
}

//Remake grid with the size the user wants
gridSizeButton.addEventListener('click', () => {
    deleteGrid();
    
    // let wantedGridSize = prompt(`What grid size would you like?`);
    // if(wantedGridSize > 100){
    //     wantedGridSize = prompt(`the grid size should not be greater then 100, enter another number`);
    // }

    let wantedGridSize = prompt(`What grid size would you like?`);
    while (Number(wantedGridSize) > 100){
        wantedGridSize = prompt(`The grid size can not be greater then 100`);
    };
    gridSize = Number(wantedGridSize);
    celWidthAndHeigth = 960 / gridSize;
    pixels = `${celWidthAndHeigth}px`;
    createGrid();
});

//delete grid
function deleteGrid(){
    for(let i = container.children.length - 1; i >= 0; i--){
        container.removeChild(container.children[i]);
    }
}

createGrid();
