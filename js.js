//Create variable for the contained div on the index page
const container=document.getElementById("container");
//Set CSS for the container div that grid will rely on
container.style.cssText="display: grid; margin:0 auto; width:80%; text-align:center;";

//Set variable for the number of rows/columns grid will have
let size=16;
//Set the size of the grid based on this variable
container.style.gridTemplateRows="repeat("+size+", 30px)";
container.style.gridTemplateColumns="repeat("+size+", 30px)";
//Set count for maximum number of squares in grid (16x16 grid has 256)
let max=size*size;

//loop to create the grid, with each grid having size*size no. of elements
for(let i=0;i<max;i++){
//create the square
let newSquare = document.createElement('div');

container.appendChild(newSquare);
}