//array with colors. Remember 6 color choices
var colors = GenerateColors(6);
var numOfsquare=6;
var squares = document.querySelectorAll(".square");//selecting each square

var picked=pickColor();//chosing specific color
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numOfsquare=3;
	colors = GenerateColors(numOfsquare);
	picked = pickColor();
	colorDisplay.textContent = picked;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.background=colors[i];

		//why no background-color
}


	else{
		squares[i].style.display="none";

	}
}


});

hardBtn.addEventListener("click",function(){

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
numOfsquare=6;

	colors = GenerateColors(numOfsquare);
	picked = pickColor();
	colorDisplay.textContent = picked;

	for(var i=0;i<squares.length;i++){

		squares[i].style.background=colors[i];
		squares[i].style.display="block";

}

});

resetButton.addEventListener("click", function() {

	//generate all new colors
	colors = GenerateColors(numOfsquare);
	//pick a new random color from array
	picked = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = picked;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
});



colorDisplay.textContent=picked;//displaying picked color


for(var i=0; i<squares.length;i++){


//styling each color
	squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){


var clickedColor=this.style.background;
if(clickedColor === picked) {

			messageDisplay.textContent="Correct";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			 h1.style.background=clickedColor;

		} else {

			 this.style.background = "#232323";
			//alert("WRONG!!!");
			messageDisplay.textContent="Try Again";
		}
  });

}

function changeColor(color){

//loop theroughjt square


for(var i=0;i<squares.length;i++){
//change color
squares[i].style.background=color;

}
}


function pickColor(){

	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}



function GenerateColors(num){
//make an array
var arr=[];
//add random colors

for(var i=0;i<num;i++){

	//get random color and push into arr
			arr.push(randomColor());

}
//return array
	return arr;
}








function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
