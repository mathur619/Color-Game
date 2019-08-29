let numSquares = 6;
let square = document.querySelectorAll(".square");
let colors=generateColors(square.length);
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let rgb = document.querySelector("#rgb");
let reset = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

let selectedColor = pickColor(numSquares );
rgb.innerHTML=selectedColor;

easy.addEventListener("click", function() {
   easy.classList.add("selected");
   hard.classList.remove("selected");
   numSquares = 3;
   colors = generateColors(numSquares);
    selectedColor = pickColor();
    rgb.innerHTML = selectedColor;
    for(let i=0; i<square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
    reset.innerHTML = "New Color";
    message.innerHTML = "";
    h1.style.backgroundColor = "steelblue";

});

hard.addEventListener("click", function() {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    colors = generateColors(numSquares);
    selectedColor = pickColor();
    rgb.innerHTML = selectedColor;
    for(let i=0; i<square.length; i++){
        
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
    }
    reset.innerHTML = "New Color";
    message.innerHTML = "";
    h1.style.backgroundColor = "steelblue";

 });

reset.addEventListener("click", function(){
    colors = generateColors(numSquares);
    selectedColor = pickColor();
    rgb.innerHTML = selectedColor;
    for(let i=0; i<square.length; i++){
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    reset.innerHTML = "New Color";
    message.innerHTML = "";
});


for(let i=0; i<square.length; i++){

    square[i].style.backgroundColor=colors[i];

    square[i].addEventListener("click", function() {

        let clickedColor=this.style.backgroundColor;

        if(clickedColor==selectedColor){
            message.textContent="Correct!";
            changeColor(clickedColor);
            reset.innerHTML = "Play Again?";
            }
        else{
            this.style.backgroundColor="#232323";
            message.textContent="try again!";
            }
    });
}

function generateColors(n){
    let color=[];
    for(let i=0; i<n; i++){

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        color[i] = `rgb(${r}, ${g}, ${b})`;
     }
    return color;
}

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(color){
    for(let i=0; i<square.length; i++){
        square[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}



    
   