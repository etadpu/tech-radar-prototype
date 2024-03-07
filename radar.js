let data;
const sizeX = 800;
const sizeY = 800;

function preload(){
  // Read the input from the file data.json
  data = loadJSON('data.json');
}



function setup() {
    createCanvas(sizeX, sizeY);
    colorMode(HSB, 360, 100, 100, 100);
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
    const textXOffset = 30;
    const textYOffset = -10;
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
    

    // Draw the data points
    // for (let i = 0; i < data.length; i++) {
    //     let x = centerX + cos(radians(data[i].angle)) * scalar * data[i].distance;
    //     let y = centerY + sin(radians(data[i].angle)) * scalar * data[i].distance;
    //     ellipse(x, y, dataPointRadius, dataPointRadius);
    // } 

    // Draw the data points
    for (var member in data) {
        let x = centerX + cos(radians(data[member].angle)) * scalar * data[member].distance;
        let y = centerY + sin(radians(data[member].angle)) * scalar * data[member].distance;
        fill(100, 100, 0, 100); // White color with 0 alpha (completely transparent)
        ellipse(x, y, dataPointRadius, dataPointRadius);
        fill(20);
        text(data[member].name, x + textXOffset, y + textYOffset);
    }


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