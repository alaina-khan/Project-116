

lipX=0;
lipY=0;

function preload(){
    lip= loadImage('https://i.postimg.cc/QC9GHyNL/clown-image.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.lip.x;
        noseY= results[0].pose.lip.y;
        console.log("lip x =" + results[0].pose.lip.x);
        console.log("lip y = " + results[0].pose.lip.y);
    }
}


 function draw(){
     image(video,0,0,300,300)
     fill(255,0,0);
     stroke(255,0,0);
     circle(lipX,lipY,20);
     image(lip, lipX, lipY, 30, 30);
 }

 function take_snapshot(){
     save('myFilterImage.png');
 }