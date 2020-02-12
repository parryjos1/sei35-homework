let particles = [];
const detection = {};
let idCounter = 0;

const controls = {
  velocityScale: 0.3,
  edgeMode: 'bounce',
  distanceThreshold: 50,
  collisionDetection: true
};

// Runs once when your sketch loads
function setup() {
  createCanvas(windowWidth, windowHeight);  // maximise canvas space!
  frameRate(60);

  colorMode(HSB, 255);  // Use Hue, Saturation, Brightness, range of 0..255
  // imageMode(CENTER);

  background(0);  // black background (greyscale)

  // add a control panel
  const gui = new dat.GUI();
  gui.add(controls, 'velocityScale', -1, 1);
  gui.add(controls, 'edgeMode', ['bounce', 'wrap']);
  gui.add(controls, 'distanceThreshold', 0, 400);
  gui.add(controls, 'collisionDetection', true, false);

  // stroke(255, 0, 0);  // outline colour R,G,B
  //
  // line(
  //    10, 10,// form x,y
  //    500, 500// to x,y
  // );
  //
  // const greenish = [0, 200, 0];
  // fill(...greenish);  // what colour to fill in solid shapes with
  // // stroke(0, 0, 255);
  //
  // noStroke();
  //
  // rect(
  //    300, 100,  // top left corner x, y
  //    300, 300   // width, height
  // );
  //
  // fill(0, 0, 255);
  //
  // triangle(
  //   400, 200,  // top point
  //   100, 500,  // bottom left point
  //   700, 500   // bottom right
  // );

}  // setup()


// Runs once every screen refresh, ideally 60 times per second
function draw() {
  if (!keyIsDown(CONTROL)) {
    background(0);  // clear the screen each draw!
  }

  // stroke(
  //   random(255),
  //   random(255),
  //   random(255)
  // );
  //
  // strokeWeight(8);
  //
  // line(
  //   //random(windowWidth), random(windowHeight),  // start x,y
  //   mouseX, mouseY,
  //   mouseX + 300, mouseY + 300
  //   //random(windowWidth), random(windowHeight)   // end x,y
  // );

  const hue = map(
    mouseX,          // input value
    0, windowWidth,  // input range
    0, 255           // output range
  ); // or use: (mousX * 255/ windowWidth)

  // fill(
  //   hue,//frameCount % 255,  // Hue, need to wrap it ourselves using modulus
  //   255,  // Saturation
  //   255  // Brightness
  // );

  noStroke();

  // const size = random(100);

  const vx = mouseX - pwinMouseX + random([-4, 4]);  // mouse x velocity (speed)
  const vy = mouseY - pwinMouseY + random([-4, 4]);  // mouse y velocity

  const size = map( mouseY, 0, windowHeight, 10, 50);

  if (keyIsDown(SHIFT)) {  // mouseIsPressed ||
    // ellipse(mouseX, mouseY, size, size);
    particles.push({
      x: mouseX,
      y: mouseY,
      vx: vx,
      vy: vy,
      size: size,
      hue: frameCount % 255,
      id: idCounter
    });

    idCounter++;

  }  // pressed

  updateParticles();

}  // draw()

function updateParticles() {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // Update the particle position by adding the velocity values to it
    p.x += p.vx * controls.velocityScale;
    p.y += p.vy * controls.velocityScale;


    if ( controls.edgeMode === 'bounce') {
      // bounce off edges
      if (p.x > windowWidth || p.x <= 0) {
        p.vx *= -1;
      }
      if (p.y > windowHeight || p.y <= 0) {
        p.vy *= -1;
      }
    } else {
      // wrap around edges
      if (p.x >= windowWidth) {
        p.x = 0;
      } else if (p.x <= 0) {
        p.x = windowWidth;
      }
      if (p.y >= windowHeight) {
        p.y = 0;
      } else if (p.y <= 0) {
        p.y = windowHeight;
      }
    }

    for (let j = 0; j < particles.length; j++) {
      if (i === j) {
        continue;
      }
      const other = particles[j];

      // Calculate the distance between these two particles, p and other:
      const xDist = p.x - other.x;
      const yDist = p.y - other.y;
      const distance = Math.sqrt(xDist*xDist + yDist*yDist);

      if (distance < controls.distanceThreshold) {

        // The opacity of the line is 'inversely proportional' to the distance between
        // the particles, i.e. the closer the are, the more opaque (less transparent) it is
        const alpha = map(distance, 0, controls.distanceThreshold, 255, 0);

        stroke(p.hue, 255, 255, alpha);
        line(p.x, p.y, other.x, other.y);
      }

      if (controls.collisionDetection && !detection[`${p.id}-${other.id}`] && distance < p.size + 30) {  // plus offset
        detection[`${p.id}-${other.id}`] = true;
        p.vx *= -1;
        p.vy *= -1;
        other.vx *= -1;
        other.vy *= -1;
        //console.log('registered', `${p.id}-${other.id}`, detection[`${p.id}-${other.id}`]);
      }

      if (controls.collisionDetection && (detection[`${p.id}-${other.id}`] || detection[`${other.id}-${p.id}`]) && distance >= p.size + 30) {
      
        delete detection[`${p.id}-${other.id}`];

      }

    }


    fill(p.hue, 255, 255);
    ellipse(p.x, p.y, p.size, p.size);
  }
} // updateParticles


function keyPressed(e) {
  if (keyCode === 32) {
    e.preventDefault();
    particles = [];  // Spacebar clear the screen
    idCounter = 0;
  }
}  // keyPressed()
