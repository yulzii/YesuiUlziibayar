///////////////////////**Drag Butterfly**///////////////////////

function getRandomWidth(min, max) {
  return Math.random() * (max - min) + min;
}

function setup() {
  let canvas= createCanvas(400, 450);
  canvas.parent("animation-container");
}

let xMouse=0;
let yMouse=0;
let diffX=200;
let diffY=200;

function draw() {
  clear();
  let s=millis()/10%120;
  let m=millis()/10%30;
  
  if(s>=60){
     s=120-s;
     }

  
  stroke('#E7E1D5'); // Change the color
  noFill();

  
  
  //antennae
  arc(diffX, 100-180+diffY, 50, 70, HALF_PI, PI);
  arc(diffX, 100-180+diffY, 50, 70, 0, HALF_PI);
  
  //wings
  fill('#F0C5EE'); // Change the color
  triangle(diffX, diffY, 560-360-s+diffX, 170-180+s/2+diffY, 560-360-s+diffX, -180+diffY);
  triangle(diffX, diffY, 160-360+s+diffX, 170-180+s/2+diffY, 160+s+diffX-360, -180+diffY);
  quad( 190-360+s+diffX, 400-180+diffY, 160-360+s+diffX, 260-180-s/2+diffY,345-360+diffX, 210-180+diffY, 345-360+diffX, 250+diffY-180);
  quad( 530-s-360+diffX, 400-180+diffY, 560-360-s+diffX, 260-180-s/2+diffY,375-360+diffX, 210-180+diffY, 375-360+diffX, 250-180+diffY);
  
  //body
  ellipse(diffX, 200-180+diffY, 10, 110);
  ellipse(diffX, 170-180+diffY, 14, 50);
  ellipse(diffX, 140-180+diffY, 17, 20);
  strokeWeight(5);
  
}
  document.addEventListener("mousemove", (event) => {
    const container = document.getElementById("animation-container");
    container.style.left = event.pageX-200 + "px";
    container.style.top = event.pageY-220 + "px";
    container.style.display = "block";  
});
