let data;
let dataPoints = [];
const sizeX = 800;
const sizeY = 800;

function preload(){
  // Read the input from the file data.json
  data = loadJSON('data.json');
}



function setup() {
    createCanvas(sizeX, sizeY);
    colorMode(HSB, 360, 100, 100, 100);
    // Make an array of all the data points contained in the global variable data
    for (var member in data) {
        dataPoints.push(new DataPoint(data[member].angle, data[member].distance, data[member].name, data[member].url, width / 2, height / 2, 300));
    }
  }
  
function draw() {
    // Constant values
    const centerX = width / 2;
    const centerY = height / 2;
    const scalar = 300;
    // Radar background lines circles
    const radiusInner = 1/3;
    const radiusMiddle = 2/3;
    const radiusOuter = 1;
    // Radius of the data points dots that represent the specific tech in the radar
    const dataPointRadius = 12;
    // Text offset
    const textConnectivityLabelXOffset = 140;
    const textConnectivityLabelYOffset = 150;
    const textSolutionLabelXOffset = 50;
    const textSolutionLabelYOffset = 50;
    const textExperienceLabelXOffset = 50;
    const textExperienceLabelYOffset = 150;
    const textManagementLabelXOffset = 130;
    const textManagementLabelYOffset = 50;
    background(255);
    //// Drawing default settings config ////
   
    // textFont('Courier New');
    // textWrap(WORD);
    // Circles settings
    ellipseMode(CENTER);
    fill(255, 255, 255, 0); // White color with 0 alpha (completely transparent)

    radialGradient(
        width/2, height/2, 0,//Start pX, pY, start circle radius
        width/2, height/2, 400,//End pX, pY, End circle radius
        // width/2-40, height/2-120, 0,//Start pX, pY, start circle radius
        // width/2-40, height/2-120, 380,//End pX, pY, End circle radius
        // #DBEEDE
        color(100, 178, 100, 100), //Start color
        color(0, 0, 255, 100), //Start color
        
    );
    ellipse(centerX, centerY, scalar * radiusOuter * 2, scalar * radiusOuter * 2);
    
    // Draw outer radar background lines
    ellipse(centerX, centerY, scalar * radiusOuter * 2, scalar * radiusOuter * 2);
    // Draw middle radar background lines
    ellipse(centerX, centerY, scalar * radiusMiddle * 2, scalar * radiusMiddle * 2);
    // Draw inner radar background lines
    ellipse(centerX, centerY, scalar * radiusInner * 2, scalar * radiusInner * 2);
    // Draw radar horizontal line
    line(0, centerY, width, centerY);
    // Draw radar vertical line
    line(centerX, 0, centerX, height);

    // Pie chart labels
    fill(40);
    stroke(255);
    strokeWeight(1);
    textStyle(BOLD);
    textSize(20);
    text("Connectivity", textConnectivityLabelXOffset, textConnectivityLabelYOffset);
    text("Solutions", scalar * radiusOuter * 2 + textSolutionLabelXOffset, scalar * radiusOuter * 2 + textSolutionLabelYOffset);
    text("Experience", scalar * radiusOuter * 2 + textExperienceLabelXOffset, textExperienceLabelYOffset);
    text("Management", textManagementLabelXOffset, scalar * radiusOuter * 2 + textManagementLabelYOffset);
    // Text settings
    textSize(15);
    fill(20);
    stroke(255);
    strokeWeight(2);
    textAlign(CENTER);
    textStyle(NORMAL);
    

    // Run through the data points
    for (let i = 0; i < dataPoints.length; i++) {
        // Draw the data points
        dataPoints[i].drawDataPoint();
        // Check if mouse is over the data point,
        // if true, display the data point info
        // if mouse is clicked, open the url of the data point
        if(dataPoints[i].isMouseOver()){
            fill(0, 0, 0, 100);
            stroke(0, 0, 0, 100);
            strokeWeight(1);
            textAlign(CENTER);
            textStyle(BOLD);
            textSize(20);
            // text(dataPoints[i].name, mouseX, mouseY - 20);
            textSize(15);
            textStyle(NORMAL);
            text("--Some dummy text--\n--Some dummy text--\n--Some dummy text--\n--Some dummy text--\n--Some dummy text--\n", mouseX, mouseY);
            stroke(255);
            strokeWeight(2);

            if(mouseIsPressed){
                window.open(dataPoints[i].url, '_blank');
            }
        }
    }

    // Draw the data points
    // for (var member in data) {
    //     let x = centerX + cos(radians(data[member].angle)) * scalar * data[member].distance;
    //     let y = centerY + sin(radians(data[member].angle)) * scalar * data[member].distance;
    //     fill(100, 100, 0, 100); // White color with 0 alpha (completely transparent)
    //     ellipse(x, y, dataPointRadius, dataPointRadius);
    //     fill(20);
    //     text(data[member].name, x + textXOffset, y + textYOffset);
    // }

    // mouseOverDataPoint(mouseX, mouseY, dataPointRadius);
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
        this.textXOffset = 30;
        this.textYOffset = -10;
        this.scalar = scalar;
    };
    // Draw the data point
    drawDataPoint(){
        var x = this.centerX + cos(radians(this.angle)) * this.scalar * this.distance;
        var y = this.centerY + sin(radians(this.angle)) * this.scalar * this.distance;
        fill(100, 100, 0, 100); // White color with 0 alpha (completely transparent)
        ellipse(x, y, this.dataPointRadius, this.dataPointRadius);
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
}

