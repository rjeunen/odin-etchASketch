//Create a webpage with a 16x16 grid of square divs. 
//create the divs using JS

//Elements
const container = document.querySelector("#container");

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
            gridCel.style.border = `1px solid black`;
            
            gridCel.addEventListener('mouseenter', () => {
                gridCel.classList.add('hoverEffect');
            });
            container.appendChild(gridCel);
        }
    }
}

createGrid();
