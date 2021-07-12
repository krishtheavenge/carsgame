canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
 
car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 80;
background_image = "racing.jpg";
function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;
 
    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_image;
}
 
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    console.log(car2_imageTag)
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}
 
window.addEventListener("keydown", my_keydown);
 
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '87')
    {
        car2_up();
        console.log("w key");
    }
    if(keypressed == '83')
    {
        car2_down();
        console.log("s key");
    }
    if(keypressed == '68')
    {
        car2_right();
        console.log("d key");
    }
    if(keypressed == '65')
    {
        car2_left();
        console.log("a key");
    }
    if(keypressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keypressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keypressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keypressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }
}
function car1_up(){
    if(car1_y>=0){
        car1_y = car1_y - 10
        console.log("when up arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left(){
    if(car1_x>0){
        car1_x = car1_x - 10
        console.log("when left arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if(car1_y<=500){
        car1_y = car1_y + 10
        console.log("when down arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if(car1_x<=500){
        car1_x = car1_x + 10
        console.log("when right arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up(){
    if(car2_y>=0){
        car2_y = car2_y - 10
        console.log("when up arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if(car2_x>=800){
        car2_x = car2_x - 10
        console.log("when left arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y = car2_y + 10
        console.log("when down arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x<=800){
        car2_x = car2_x + 10
        console.log("when right arrow pressed, x ="+ car1_x +" y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
if(car1_x > 700){
    console.log("car1 won")
    document.getElementById('game_status').innerHTML = "Car 1 Won !!!"
 
}
if(car2_x > 700){
    console.log("car2 won")
    document.getElementById('game_status').innerHTML = "Car 2 Won !!!"
 
}
 
 
   
