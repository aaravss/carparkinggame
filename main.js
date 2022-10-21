//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

greencar_width = 75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
handicap_image = "handicaplogo.png";
//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
    
	handicap_imgTag = new Image();
	handicap_imgTag.onload = uploadHandicap;
    handicap_imgTag.src = handicap_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}

function uploadHandicap(){
	ctx.drawImage(handicap_imgTag,715,120,50,50);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){

	greencar_y = greencar_y - 10;
	console.log("When up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
	uploadBackground();
	uploadHandicap();
	uploadgreencar();
}
if(greencar_x >= 400 && greencar_x <=460 && greencar_y < 100){
	window.location.href = "win.html";
}
if(greencar_x >= 700 && greencar_x <=760 && greencar_y < 100){
	window.location.href = "lose.html";
}
if(greencar_x >= 0 && greencar_x <=380 && greencar_y < 195){
	window.location.href = "crash.html";
}
if(greencar_x >= 460 && greencar_x <=660 && greencar_y < 195){
	window.location.href = "crash.html";
}
}

function down()
{
	if(greencar_y <= 300){
	greencar_y = greencar_y + 10;
	console.log("When up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
	uploadBackground();
	uploadHandicap();
	uploadgreencar();
}
if(greencar_x >= 400 && greencar_x <=460 && greencar_y < 100){
	window.location.href = "win.html";
}
if(greencar_x >= 700 && greencar_x <=760 && greencar_y < 100){
	window.location.href = "lose.html";
}
if(greencar_x >= 0 && greencar_x <=380 && greencar_y < 195){
	window.location.href = "crash.html";
}
if(greencar_x >= 460 && greencar_x <=660 && greencar_y < 195){
	window.location.href = "crash.html";
}
}

function left()
{
	if(greencar_x >= 0){
	greencar_x = greencar_x - 10;
	console.log("When up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
	uploadBackground();
	uploadHandicap();
	uploadgreencar();
}
if(greencar_x >= 400 && greencar_x <=460 && greencar_y < 100){
	window.location.href = "win.html";
}
if(greencar_x >= 700 && greencar_x <=760 && greencar_y < 100){
	window.location.href = "lose.html";
}
if(greencar_x >= 0 && greencar_x <=380 && greencar_y < 195){
	window.location.href = "crash.html";
}
if(greencar_x >= 460 && greencar_x <=660 && greencar_y < 195){
	window.location.href = "crash.html";
}
}

function right()
{
	if(greencar_x <= 725){
	greencar_x = greencar_x + 10;
	console.log("When up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
	uploadBackground();
	uploadHandicap();
	uploadgreencar();

}
if(greencar_x >= 400 && greencar_x <=460 && greencar_y < 100){
	window.location.href = "win.html";
}
if(greencar_x >= 700 && greencar_x <=760 && greencar_y < 100){
	window.location.href = "lose.html";
}
if(greencar_x >= 0 && greencar_x <=380 && greencar_y < 195){
	window.location.href = "crash.html";
}
if(greencar_x >= 460 && greencar_x <=660 && greencar_y < 195){
	window.location.href = "crash.html";
}
}
