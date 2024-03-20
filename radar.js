let data;
let dataPoints = [];
let distanceAngle = 90;     // how far (in degrees) text will go



// const sizeX = 800;
// const sizeY = 800;

function preload(){
  // Read the input from the file data.json
  data = loadJSON('data.json');
}



function setup() {
    createCanvas(windowWidth / 2, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    // Make an array of all the data points contained in the global variable data
    for (var member in data) {
        dataPoints.push(new DataPoint(data[member].angle, data[member].distance, data[member].name, data[member].url, windowWidth / 2, windowHeight / 2, 300));
    }
  }
  
  function draw() {
    background(255);  
    //     //////Knowit Colors////////
    // let green = color(85, 212, 64); // Green
    // let white = color(254, 251, 230); // Knowit White
    // let pink = color(255, 214, 184);// Pink
    // let lightPink = color(255, 235, 221);// Light pink
    // let purple = color(207, 206, 255); //Purple
    // let lightPurple = color(247, 246, 255); //Light Purple
    // let blue = color(55, 43, 197);// Blue
    // let black = color(11, 11, 38);// Knowit Black
    
    //// Constant values ////
    const centerX = width / 2;
    const centerY = height / 2;
    const scalar = Math.min(width, height)/4;
    // Radar background lines circles
    const radiusInner = 1/3;
    const radiusMiddle = 2/3;
    const radiusOuter = 1;
    // Radius of the data points dots that represent the specific tech in the radar
    // Text offset
    // const textConnectivityLabelXOffset = 140;
    // const textConnectivityLabelYOffset = 150;
    // const textSolutionLabelXOffset = 50;
    // const textSolutionLabelYOffset = 50;
    // const textExperienceLabelXOffset = 50;
    // const textExperienceLabelYOffset = 150;
    // const textManagementLabelXOffset = 130;
    // const textManagementLabelYOffset = 50;

    // Draw quarter circle 1
    stroke(255);
    strokeWeight(1);
    fill(40, 200, 200, 35);
    arc(centerX, centerY, scalar * radiusOuter * 2.5, scalar * radiusOuter * 2.5, 0, PI/2, PIE);

    // Draw quarter circle 2
    fill(150, 200, 200, 35);
    arc(centerX, centerY, scalar * radiusOuter * 2.5, scalar * radiusOuter * 2.5, PI/2, PI, PIE);

    // Draw quarter circle 3
    fill(200, 200, 200, 35);
    arc(centerX, centerY, scalar * radiusOuter * 2.5, scalar * radiusOuter * 2.5, PI, 3 * PI / 2, PIE);

    // Draw quarter circle 4
    fill(1, 200, 200, 35);
    arc(centerX, centerY, scalar * radiusOuter * 2.5, scalar * radiusOuter * 2.5, 3 * PI / 2, 0, PIE);

    //// Drawing default settings config ////
    // Circles settings
    ellipseMode(CENTER);
    stroke(255);
    fill(255, 255, 255, 0); // White color with 0 alpha (completely transparent)

    radialGradient(
        width/2, height/2, 0,//Start pX, pY, start circle radius
        width/2, height/2, scalar * 1.4 * radiusOuter,//End pX, pY, End circle radius
        // width/2-40, height/2-120, 0,//Start pX, pY, start circle radius
        // width/2-40, height/2-120, 380,//End pX, pY, End circle radius
        // #DBEEDE
        color(100, 178, 100, 100), //Start color
        color(0, 0, 255, 100), //Start color
    );
    
    
    //// Draw the radar background circles ////
    
    strokeWeight(2);
    stroke(50, 100);
    // Draw outer radar background circle
    ellipse(centerX, centerY, scalar * radiusOuter * 2, scalar * radiusOuter * 2);
    // Draw middle radar background circle
    // stroke(0, 100);
    stroke(255, 100);
    ellipse(centerX, centerY, scalar * radiusMiddle * 2, scalar * radiusMiddle * 2);
    // Draw inner radar background circle
    ellipse(centerX, centerY, scalar * radiusInner * 2, scalar * radiusInner * 2);

    //// Draw the horizontal and vertical lines of the radar ////
    stroke(255, 100);
    strokeWeight(1);
    // Draw radar horizontal line
    line(0, centerY, width, centerY);
    // Draw radar vertical line
    line(centerX, 0, centerX, height);

   

    // Pie chart labels
    // fill(40);
    // stroke(255);
    // strokeWeight(1);
    // textStyle(BOLD);
    // textSize(20);
    // textAlign(CENTER);
    // text("Connectivity", textConnectivityLabelXOffset, textConnectivityLabelYOffset);
    // text("Solutions", scalar * radiusOuter * 2 + textSolutionLabelXOffset, scalar * radiusOuter * 2 + textSolutionLabelYOffset);
    // text("Experience", scalar * radiusOuter * 2 + textExperienceLabelXOffset, textExperienceLabelYOffset);
    // text("Management", textManagementLabelXOffset, scalar * radiusOuter * 2 + textManagementLabelYOffset);
    // Text settings
    // textSize(15);
    // fill(20);
    // stroke(255);
    // strokeWeight(2);
    // textAlign(CENTER);
    // textStyle(NORMAL);
    
    /////////////////////////////////////////////
    ////DRAW TEXT IN A CIRCLE, ugly as fuck/////
    ///////////////////////////////////////////
    // 'ytivitcennoC', 'ecneirepxE'
    //let areas = ['ytivitcennoC', 'ecneirepxE', 'Solutions', 'Insight'];
    // let areas = ['', '', 'Social & Business', 'Technologies'];
    // push();
    // translate(width/2, centerY + centerY/2);  

    // let str = areas[2];
    // let angleBetweenLetters = radians(distanceAngle) / (str.length*1.5);
    // rotate(radians(0));
    
    // rotate(radians((distanceAngle*0.5) - (distanceAngle/(str.length/5))));
    // for (let j=0; j<str.length; j++){
    //   push();
    //   rotate(j * angleBetweenLetters);                      // rotate to angle
    //   translate(0,-scalar * radiusOuter - 30);              // and translate to edge of circle
    //   fill(white);
    //   noStroke();
    //   textSize(radius/8);
    //   text(str[j], 0,0);                                    // draw character at location
    //   pop();
    // }
    // pop();
    // push();
    // translate(width/2, centerY + centerY/2);  

    // str = areas[3];
    // angleBetweenLetters = radians(distanceAngle) / (str.length*1.5);
    // rotate(radians(280));
    
    // rotate(radians((distanceAngle*0.5) - (distanceAngle/(str.length/5))));
    // for (let j=0; j<str.length; j++){
    //   push();
    //   rotate(j * angleBetweenLetters);   // rotate to angle
    //   translate(0,-scalar * radiusOuter - 30);              // and translate to edge of circle
    //   fill(white);
    //   noStroke();
    //   textSize(radius/8);
    //   text(str[j], 0,0);                 // draw character at location
    //   pop();
    // }
    // pop();

    // Draw and update the data points
    for (let i = 0; i < dataPoints.length; i++) {
        // Update the scalar of the data points
        dataPoints[i].update(centerX, centerY, scalar);
        // Draw the data points
        dataPoints[i].drawDataPoint();
        // Check if mouse is over the data point,
        // if true, display the data point info
        // if mouse is clicked, open the url of the data point
        // if(dataPoints[i].isMouseOver()){
        //     rectMode(CENTER);
        //     fill(200);
        //     stroke(2);
        //     rect(mouseX, mouseY + 30, 150, 110, 10);

        //     fill(0, 0, 0, 100);
        //     stroke(0, 0, 0, 100);
        //     strokeWeight(1);
        //     textAlign(CENTER);
        //     textStyle(BOLD);
        //     textSize(20);
        //     // text(dataPoints[i].name, mouseX, mouseY - 20);
        //     textSize(15);
        //     textStyle(NORMAL);
        //     // textWrap(WORD);
        //     text("Some dummy text.\nSome dummy text.\nSome dummy text.\nSome dummy text.\nSome dummy text.\n", mouseX, mouseY);
        //     // stroke(255);
        //     strokeWeight(2);

            

        //     if(mouseIsPressed){
        //         window.open(dataPoints[i].url, '_blank');
        //     }
        // }
    }

    // Draw mouse over text for the data points
    for (let i = 0; i < dataPoints.length; i++) {
        // Update the scalar of the data points
        // dataPoints[i].update(centerX, centerY, scalar);
        // Draw the data points
        // dataPoints[i].drawDataPoint();
        // Check if mouse is over the data point,
        // if true, display the data point info
        // if mouse is clicked, open the url of the data point
        if(dataPoints[i].isMouseOver()){
            // Highlight the datapoint that is hovered over
            dataPoints[i].highLightDataPoint();
            // Draw background overlay for the text
            rectMode(CORNER);
            fill(200);
            stroke(2);
            rect(mouseX - 7, mouseY + 30, 160, 110, 10);

            fill(0, 0, 0, 100);
            stroke(0, 0, 0, 100);
            strokeWeight(1);
            textAlign(LEFT);
            textStyle(BOLD);
            // textSize(20);
            // text(dataPoints[i].name, mouseX, mouseY - 20);
            textSize(15);
            textStyle(NORMAL);
            // textWrap(WORD);
            text("ARTICLE\n\nSome dummy text.\nSome dummy text.\nSome dummy text.\n", mouseX, mouseY+50);
            // stroke(255);
            strokeWeight(2);

            if(mouseIsPressed){
                window.open(dataPoints[i].url, '_blank');
            }
        }
    }
}


function windowResized() {
    resizeCanvas(windowWidth / 2, windowHeight);
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
    let gradient = drawingContext.createRadialGradient(
      sX, sY, sR, eX, eY, eR
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
  
    drawingContext.fillStyle = gradient;
  }
  
function shadow(){
drawingContext.shadowOffsetX = 0;
drawingContext.shadowOffsetY = 0;
drawingContext.shadowBlur = 0;
drawingContext.shadowColor = color(230, 30, 18, 100);
// drawingContext.shadowColor = color(0,0,0, 100);
}

// This function will check if mouse is within a given circle
// function mouseOverDataPoint(mouseX, mouseY, dataPointRadius) {
//     for (var member in data) {
//         let x = width / 2 + cos(radians(data[member].angle)) * 300 * data[member].distance;
//         let y = height / 2 + sin(radians(data[member].angle)) * 300 * data[member].distance;
//         let d = dist(mouseX, mouseY, x, y);
//         if (d < dataPointRadius) {
//             fill(0, 0, 0, 100);
//             stroke(0, 0, 0, 100);
//             strokeWeight(1);
//             textAlign(CENTER);
//             textStyle(BOLD);
//             textSize(20);
//             text(data[member].name, mouseX, mouseY - 20);
//             textSize(15);
//             textStyle(NORMAL);
//             text("Experience: " + data[member].experience, mouseX, mouseY);
//             text("Connectivity: " + data[member].connectivity, mouseX, mouseY + 20);
//             text("Solutions: " + data[member].solutions, mouseX, mouseY + 40);
//             text("Management: " + data[member].management, mouseX, mouseY + 60);
//             stroke(255);
//             strokeWeight(2);
//         }
//     }
// }

// Class data points that has its own position based on the angle and distance,
// and its own name and url link to the tech
class DataPoint {
    constructor(angle, distance, name, url, centerX, centerY, scalar) {
        this.angle = angle;
        this.distance = distance;
        this.name = name;
        this.url = url;
        this.dataPointRadius = 12;
        this.centerX = centerX;
        this.centerY = centerY;
        this.textXOffset = scalar * 0.02;
        this.textYOffset = scalar * -0.02;
        this.scalar = scalar;
    };
    // Draw the data point
    drawDataPoint(){
        var x = this.centerX + cos(radians(this.angle)) * this.scalar * this.distance;
        var y = this.centerY + sin(radians(this.angle)) * this.scalar * this.distance;
        stroke(255, 100);
        fill(255, 255, 255, 100);
        ellipse(x, y, this.dataPointRadius, this.dataPointRadius);
        fill(20);
        text(this.name, x + this.textXOffset, y + this.textYOffset);
    }

    highLightDataPoint(){
        var x = this.centerX + cos(radians(this.angle)) * this.scalar * this.distance;
        var y = this.centerY + sin(radians(this.angle)) * this.scalar * this.distance;
        fill(200, 100, 150, 50); // White color with 0 alpha (completely transparent)
        ellipse(x, y, this.dataPointRadius + 10, this.dataPointRadius + 10);
        fill(20);
        text(this.name, x + this.textXOffset, y + this.textYOffset);
    }
    // Check if mouse is over the data point
    isMouseOver(){
        let x = this.centerX + cos(radians(this.angle)) * this.scalar * this.distance;
        let y = this.centerY + sin(radians(this.angle)) * this.scalar * this.distance;
        let d = dist(mouseX, mouseY, x, y);
        return d < this.dataPointRadius ? true : false;
    }
    update(centerX, centerY, scalar){
        this.scalar = scalar;
        this.centerX = centerX;
        this.centerY = centerY;
    }
}

