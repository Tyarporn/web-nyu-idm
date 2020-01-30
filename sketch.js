function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);
  strokeWeight(3);
  stroke(1);

  fill(255, 253, 208);//creme color
  beginShape();//overall head
  curveVertex(500,250);
  curveVertex(500,250);
  curveVertex(460,165);
  curveVertex(445,145);
  curveVertex(400,130);
  curveVertex(300,125);
  curveVertex(250,140);
  curveVertex(200,200);
  curveVertex(150,250);
  curveVertex(75,280);
  curveVertex(50,285);
  curveVertex(20,295);
  curveVertex(25,325);
  curveVertex(45,345);
  curveVertex(100,350);
  curveVertex(250,350);
  curveVertex(300,355);
  curveVertex(375,420);
  curveVertex(400,500);
  curveVertex(500,500);
  curveVertex(500,250);
  curveVertex(500,250);

  endShape();

  fill(160, 82, 45);//brown color
  beginShape();//ears
  curveVertex(310,125);
  curveVertex(310,125);
  curveVertex(305,165);
  curveVertex(320,240);
  curveVertex(350,300);
  curveVertex(385,342.5);
  curveVertex(427.5,310);
  curveVertex(442.5,250);
  curveVertex(447.5,195);
  curveVertex(445,145);
  curveVertex(400,130);
  curveVertex(400,130);
  endShape();

  fill(0);//black color
  beginShape();//nose
  curveVertex(20,295);
  curveVertex(20,295);
  curveVertex(45,262.5);
  curveVertex(75,280);
  curveVertex(75,280);
  endShape();

  if(get(mouseX,mouseY)[0] < 1)//neutral mode, checks if mouse is on background
    {
      strokeWeight(15);//regular eye
      point(250, 225);
    }
  else//happymode, if mouse is on dog...maybe check for if the mouse is on text?
    {
      strokeWeight(3);
      noFill();
      beginShape();//happy eye
      curveVertex(200,250);
      curveVertex(200,250);
      curveVertex(200,250);
      curveVertex(225,230);
      curveVertex(250,225);
      curveVertex(270,230);
      curveVertex(285,242.5);
      curveVertex(285,242.5);
      endShape();

      beginShape();//happy mouth
      curveVertex(100,350);
      curveVertex(100,350);
      curveVertex(145,348.5);
      curveVertex(177.5,335);
      curveVertex(207.5,305);
      curveVertex(207.5,305);
      endShape();

      smooth();//heart
      noStroke();
      fill(219, 112, 147);//pink
      beginShape();
      vertex(50, 225);
      bezierVertex(50, 205, 90, 215, 50, 250);
      vertex(50, 225);
      bezierVertex(50, 205, 10, 215, 50, 250);
      endShape();
    }
  //print(get(mouseX,mouseY));
}
