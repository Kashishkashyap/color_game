var numsquare= 0;
var color= generatecolors(6);
var clickedcolor;
var h1 = document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var colordisplay=document.querySelector("#colorsdisplay");
var message=document.querySelector("#answer");
var pickedcolor= pickcolors();
var resets= document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colordisplay.textContent= pickedcolor

easy.addEventListener("click",function(){
	hard.classList.remove("select");
	easy.classList.add("select");
	numsquare=3;
	color= generatecolors(numsquare);
	pickedcolor=pickcolors();
	colordisplay.textContent= pickedcolor;
	for(var i=0; i<squares.length ;i++){
		if(color[i])
		{squares[i].style.backgroundColor=color[i];
		}
		else{
			squares[i].style.display= "none";
		}
	}
	
});
hard.addEventListener("click",function(){
	hard.classList.add("select");
	easy.classList.remove("select");
	numsquare=6;
	color= generatecolors(numsquare);
	pickedcolor=pickcolors();
	colordisplay.textContent= pickedcolor;
	for(var i=0; i<squares.length ;i++){
		
		squares[i].style.backgroundColor=color[i];
		squares[i].style.display= "block";
	
		
	}
});


resets.addEventListener("click", function(){
	color = generatecolors(6);
	pickedcolor= pickcolors();
	colordisplay.textContent = pickedcolor;
	this.textContent= "New colors";
	message.textContent= "";
	for(var i=0;i < squares.length ;i++)
	squares[i].style.backgroundColor= color[i];
	h1.style.backgroundColor= "#8db6d8";
});


for(var i=0;i < squares.length ;i++){
	squares[i].style.backgroundColor= color[i];
	
	squares[i].addEventListener("click",function(){
		
		clickedcolor = this.style.backgroundColor;
		console.log(clickedcolor ,pickedcolor);
		
		if(pickedcolor==clickedcolor)
		{   changecolor(clickedcolor);
			message.textContent="Correct";
			h1.style.backgroundColor= clickedcolor;
			resets.textContent="Play again";
		}
		else
		{this.style.backgroundColor ="#232323";
			    message.textContent="Try Again";
		}
			

	});
}

function changecolor(color){
	
for(var i=0;i < squares.length;i++){
	squares[i].style.backgroundColor= color;
}
};
	
function pickcolors(){
	var random=Math.floor(Math.random() * color.length);
	return color[random];
}
function generatecolors(num){
	//make an array
		var arr=[];
	//add num random colors to array
	for(var i=0;i<num;i++){
		//get random color and push to array
		arr.push(randomcolor());
	}
	//return that array
	return arr;
}
function randomcolor(){
	
	//pick red from 0-255
	var r= Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g= Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var  b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}