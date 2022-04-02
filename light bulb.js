Status = "";
light_bulb_image = "";
Objects = [];




function preload(){
    light_bulb_image = loadImage("AC.jpg");
}





function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}






function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.Detect(light_bulb_image, gotResults);
}




function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
    Objects = results;
}




function draw(){
    image(light_bulb_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("Status").innerHTML = "Status : Objects Detected";

            fill("#fc0303");
            percent = floor(objects[i].x.confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}