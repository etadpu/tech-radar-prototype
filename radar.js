let data;
let dataPoints = [];

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
    
    // Center of the radar
    const centerX = width / 2;
    const centerY = height / 2;
    // Scalar used for the radar dimensions
    const scalar = Math.min(width, height)/4;

    // Radar background lines circles
    const radiusInner = 1/3;
    const radiusMiddle = 2/3;
    const radiusOuter = 1;
    const departmentTextOffset = 15;

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
    
    // Draw the radar overlay
    ellipseMode(CENTER);
    stroke(255);
    fill(255, 255, 255, 0); // White color with 0 alpha (completely transparent)
    // Make it a green gradient color
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

    // Draw and update the data points
    for (let i = 0; i < dataPoints.length; i++) {
        // Update the scalar of the data points
        dataPoints[i].update(centerX, centerY, scalar);
        // Draw the data points
        dataPoints[i].drawDataPoint();
    }

    // Draw mouse over text and thumbnail for the data points
    for (let i = 0; i < dataPoints.length; i++) {
        if(dataPoints[i].isMouseOver()){
            // Highlight the datapoint that is hovered over
            dataPoints[i].highLightDataPoint();
            dataPoints[i].displayThumbnail(mouseX, mouseY);
            // Redirect to the url of the data point is clicked
            if(mouseIsPressed){
                window.open(dataPoints[i].url, '_blank');
            }
        }
    }

    // Draw the outer pie chart labels for the departments
    drawTextAlongArc("EXPERIENCE", width / 2, height / 2, scalar * radiusOuter + departmentTextOffset, 0 - PI / 4);
    drawTextAlongArc("SOLUTIONS", width / 2, height / 2, scalar * radiusOuter + departmentTextOffset, 0 + PI / 8);
    drawTextAlongArcReversed("CONNECTIVITY", width / 2, height / 2, scalar * radiusOuter + departmentTextOffset + 17, 0 - PI / 4.5);
    drawTextAlongArcReversed("MANAGEMENT", width / 2, height / 2, scalar * radiusOuter + departmentTextOffset + 17, 0 - PI / 2);
}

function drawTextAlongArc(prompt, x, y, radius, startAngle) {
    let charSpacing = 0.11; // Space between characters
    let totalAngle = (prompt.length - 1) * charSpacing;
  
    for (let i = 0; i < prompt.length; i++) {
        let char = prompt.charAt(i);
        let angle = startAngle + charSpacing * i - totalAngle * 2;

        let tx = x + radius * cos(angle);
        let ty = y + radius * sin(angle);

        push();
        translate(tx, ty);
        rotate(angle + HALF_PI); // Adjust rotation to make text upright
        textSize(20);
        textStyle(NORMAL);
        textFont('Arial');
        fill(20);
        noStroke();
        text(char, 0, 0);
        pop();
    }
}

function drawTextAlongArcReversed(prompt, x, y, radius, startAngle) {
    let charSpacing = 0.11; // Space between characters
    let totalAngle = (prompt.length - 1) * charSpacing;
    
    for (let i = prompt.length - 1; i >= 0; i--) {
        let char = prompt.charAt(i);
        let angle = startAngle + charSpacing * (prompt.length - 1 - i) + totalAngle * 2;

        let tx = x + radius * cos(angle);
        let ty = y + radius * sin(angle);

        push();
        translate(tx, ty);
        rotate(angle + PI * 1.5); // Adjust rotation to make text upright
        textSize(20);
        textStyle(NORMAL);
        textFont('Arial');
        fill(20);
        noStroke();
        text(char, 0, 0);
        pop();
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
        stroke(200);
        strokeWeight(3);
        textSize(15);
        text(this.name, x + this.textXOffset, y + this.textYOffset);
    }

    // Highlight the data point marker (circle/dot)
    highLightDataPoint(){
        var x = this.centerX + cos(radians(this.angle)) * this.scalar * this.distance;
        var y = this.centerY + sin(radians(this.angle)) * this.scalar * this.distance;
        fill(200, 100, 150, 50); // White color with 0 alpha (completely transparent)
        ellipse(x, y, this.dataPointRadius + 10, this.dataPointRadius + 10);
        fill(20);
        text(this.name, x + this.textXOffset, y + this.textYOffset);
    }
    displayThumbnail(mouseX, mouseY){
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
         textSize(15);
         textStyle(NORMAL);
         text("ARTICLE\n\nSome dummy text.\nSome dummy text.\nSome dummy text.\n", mouseX, mouseY+50);
         strokeWeight(2);
    }
    // Check if mouse is over the data point
    isMouseOver(){
        let x = this.centerX + cos(radians(this.angle)) * this.scalar * this.distance;
        let y = this.centerY + sin(radians(this.angle)) * this.scalar * this.distance;
        let d = dist(mouseX, mouseY, x, y);
        return d < this.dataPointRadius ? true : false;
    }
    // Update the data parameters for the data points. This is needed when the window is resized.
    update(centerX, centerY, scalar){
        this.scalar = scalar;
        this.centerX = centerX;
        this.centerY = centerY;
    }
}

