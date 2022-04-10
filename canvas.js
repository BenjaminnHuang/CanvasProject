var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth/2 + 100;
canvas.height = window.innerHeight/2 + 100;
var c = canvas.getContext('2d');

var slider1 = document.getElementById("mySlope");
var output1 = document.getElementById("slope");
output1.innerHTML = slider1.value; // Display the default slider value

var slider2 = document.getElementById("myConst");
var output2 = document.getElementById("const");
output2.innerHTML = slider2.value; // Display the default slider value
var b = output2.innerHTML; //interception varaible
var m = output1.innerHTML; //slope variable

//draw the x and y axis
function drawGraph(){

    c.beginPath();
    c.moveTo(0, canvas.height/2);
    c.lineTo(canvas.width, canvas.height/2);
    c.strokeStyle = "black";
    c.stroke();

    //x axis
    //every chunck is 20px
    for(let i = 0; i <= canvas.width; i = i + 20){
        c.beginPath();
        c.moveTo(canvas.width/2 - i, canvas.height/2 - 5);
        c.lineTo(canvas.width/2 - i, canvas.height/2 + 5);
        c.stroke();

        c.beginPath();
        c.moveTo(canvas.width/2 + i, canvas.height/2 - 5);
        c.lineTo(canvas.width/2 + i, canvas.height/2 + 5);
        c.strokeStyle = "black";
        c.stroke();
    }

    //y axis
    //every chunck is 20px
    c.beginPath();
    c.moveTo(canvas.width/2, 0);
    c.lineTo(canvas.width/2, canvas.height);
    c.strokeStyle = "black";
    c.stroke();

    for(let i = 0; i <= canvas.height; i = i + 20){
        c.beginPath();
        c.moveTo(canvas.width/2 - 5, canvas.height/2 - i);
        c.lineTo(canvas.width/2 + 5, canvas.height/2 - i);
        c.stroke();

        c.beginPath();
        c.moveTo(canvas.width/2 - 5, canvas.height/2 + i);
        c.lineTo(canvas.width/2 + 5, canvas.height/2 + i);
        c.strokeStyle = "black";
        c.stroke();
    }
}

//draw a gree trianle that shows the run and rise
function drawRiseRun(){
        //draw the run
        c.beginPath();
        c.moveTo(canvas.width/2, canvas.height/2 - 20 * b);
        c.lineTo(canvas.width/2 + 40, canvas.height/2 - 20 * b);
        //draw the rise
        c.lineTo(canvas.width/2 + 40, canvas.height/2 - (2 * m * 20) - 20 * b);

        c.lineTo(canvas.width/2, canvas.height/2 - 20 * b)
        c.fillStyle = "green";
        c.fill();
}

function drawText(){
    c.font = "10px Arial";
    c.textAlign = "center";
    c.fillStyle = "black";
    c.fillText("Rise: " + 2*m, canvas.width - 60, 20) 
    c.fillText("Run: 2", canvas.width - 60, 40)
    c.fillText("Slope = Rise/Run: " + (2*m / 2), canvas.width - 60, 60) 
}

//default graph
drawGraph();

//Default Text
c.font = "10px Arial";
c.textAlign = "center";
c.fillStyle = "black";
c.fillText("Rise: Y_final - Y_initial", canvas.width - 60, 20)
c.fillText("Run: X_final - X_initial", canvas.width - 60, 40)
c.fillText("Slope = Rise/Run: ", canvas.width - 60, 60)

// Update the current slider value (each time you drag the slider handle)
//This works when we first slide the slope bar.
slider1.oninput = function() {
    output1.innerHTML = this.value;
    m = output1.innerHTML; //slope 
    c.clearRect(0,0, innerWidth, innerHeight); //clear the whole canvas


    slider2.oninput = function(){
        c.clearRect(0,0, innerWidth, innerHeight); 
        output2.innerHTML = this.value;
        b = output2.innerHTML; //interception 
        
        //redraw the updating graph
        drawGraph();

        //y = mx + b funtion for b;
        c.beginPath();
        c.moveTo(0, (canvas.height/2 + m * 20 * canvas.width/40 - b * 20));
        c.lineTo(canvas.width, (canvas.height/2 - m * 20 * canvas.width/40 - b * 20));
        c.strokeStyle = "red";
        c.stroke();

        //display the run and ries
        if (m != 0){
            drawRiseRun();
        }

        //Text
        drawText();
    }

    
    //redraw the updating graph
    drawGraph();

    //y = mx + b funtion for m;
    c.beginPath();
    c.moveTo(0, (canvas.height/2 + m * 20 * canvas.width/40 - b * 20));
    c.lineTo(canvas.width, (canvas.height/2 - m * 20 * canvas.width/40 - b * 20));
    c.strokeStyle = "red";
    c.stroke();


    //display the run and ries
    if (m != 0){
        drawRiseRun();
    }

    //Text
    drawText();
}

//This works when we first slide the Constant bar.
slider2.oninput = function() {
    output2.innerHTML = this.value;
    b = output2.innerHTML; //interception 
    c.clearRect(0,0, innerWidth, innerHeight); //clear the whole canvas
    
    slider1.oninput = function(){
        c.clearRect(0,0, innerWidth, innerHeight); 
        output1.innerHTML = this.value;
        m = output1.innerHTML; //slope 


        //redraw the updating graph
        drawGraph();

        //y = mx + b funtion for b;
        c.beginPath();
        c.moveTo(0, (canvas.height/2 + m * 20 * canvas.width/40 - b * 20));
        c.lineTo(canvas.width, (canvas.height/2 - m * 20 * canvas.width/40 - b * 20));
        c.strokeStyle = "red";
        c.stroke();

        //display the run and ries
        if (m != 0){
            drawRiseRun();
        }

        //Text
        drawText();
    }
    
    //redraw the updating graph
    drawGraph();

    
    //y = mx + b funtion for m;
    c.beginPath();
    c.moveTo(0, (canvas.height/2 + m * 20 * canvas.width/40 - b * 20));
    c.lineTo(canvas.width, (canvas.height/2 - m * 20 * canvas.width/40 - b * 20));
    c.strokeStyle = "red";
    c.stroke();

    

    //display the run and ries
    if (m != 0){
        drawRiseRun();
    }
    
    //Text
    drawText();
}







