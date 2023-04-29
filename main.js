hsong = "";
msong = "";

function preload(){
    hsong = loadSound("music.mp3");
    msong = loadSound("Meta.mp3");   
}

function setup(){
    canvas = createCanvas(600, 530);
    canvas.center();  

    video = createCapture(VIDEO);
    video.hide();

}


function draw(){
    image(video,0,0,600,530);
}


