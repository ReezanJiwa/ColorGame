numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.getElementsByClassName("square");
var colorPick = document.getElementById("pick");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var mode = document.getElementsByClassName("mode");

init();

function init(){
	modeButtons();
	setSquares();
	reset1();
}

function setSquares(){
	for(var j = 0; j < squares.length; j++){
		var arr = [];
		for(var i = squares.length; i--; arr.unshift(squares[i]));
		squares[j].addEventListener("click", function(){
			if (this.style.backgroundColor === pickedColor)
			{
				arr.forEach(function(element){element.style.backgroundColor = pickedColor});
				message.textContent = "Correct";
				h1.style.backgroundColor = pickedColor;
				reset.textContent = "Play Again?"
			}
			else
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		})
	}
}
function modeButtons(){
	for(var j = 0; j < mode.length; j++)
	{
		mode[j].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			mode[2].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: this.textContent === "Medium" ? numSquares = 4: numSquares = 6;
			reset1();
		});
	}
}
function reset1(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	colorPick.textContent = pickedColor;
	for(var j = 0; j < squares.length; j++){
		if(colors[j])
		{	
			squares[j].style.display = "block";
			squares[j].style.backgroundColor = colors[j];
		}
		else
		{
			squares[j].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	message.textContent = "";
}

reset.addEventListener("click", function(){
	reset1();
});

function pickRandomColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(number){
	var color = [];
	for(var j = 0; j < number; j++)
	{
		color.push(assignRandomColor());
	}
	return color;
}

function assignRandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}