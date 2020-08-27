//Create variable for the contained div on the index pagepx
const container=document.getElementById("container");
//Set CSS for the container div that grid will rely on
container.style.cssText="display: grid; margin:0; padding:0; width:720px; text-align:center; height:720px;";

//create function so that this can be reused
function makeGrid(s){
    //Set the size of the grid based on this variable
    container.style.gridTemplateRows="repeat("+s+", 1fr)";
    container.style.gridTemplateColumns="repeat("+s+", 1fr)";
    //Set count for maximum number of squares in grid (16x16 grid has 256)
    let max=s*s;
    //loop to create the grid, with each grid having size*size no. of elements
    for(let i=0;i<max;i++){
    //create the square
    let newSquare = document.createElement('div');
    //colour them grey
    newSquare.style.backgroundColor="#EFEFEF";
    //Add the Hover (mouseenter) Effect
    newSquare.addEventListener("mouseenter",function(){
        newSquare.style.backgroundColor="grey";
    })
    //Append the square to the container div
    container.appendChild(newSquare);
    }
}

//Set variable for the number of rows/columns grid will have on load
let defSize=16;

//run function
makeGrid(defSize);

//Create variable for reset button
const reset=document.getElementById("reset");

//Style button
reset.style.cssText="text-align:center; margin:0 auto; padding:10px;"

//Event
reset.addEventListener("click",function(){
    //remove every square div within container
    //check if container has ANY child div left
    while(container.firstChild){
        //remove each one
        container.removeChild(container.lastChild);
    }
    //prompt user for new size
    let response=prompt("How many squares per side of this new grid?");
    //Add a max size so the user doesn't destroy their browser
    while(response>180){
        response=prompt("Can't be too big a grid - try something smaller.");
    }
    //run the function with response
    makeGrid(response);
})