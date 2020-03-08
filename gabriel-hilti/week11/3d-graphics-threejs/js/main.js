// If the app variable already exists, then reuse it,
// otherwise initialise it to an empty object
// (only works for 'var' because of 'hoisting')
var app = app || {};

// necessary:
// - scene (space)
// - camera (observer)
// - light
// - renderer (time)


app.controls = {
  rotationSpeed: 0.01,
  bouncingSpeed: 0.05,
  step: 0  // for controlling the sphere position
}

app.init = () => {
  console.log('huhu');

  app.gui = new dat.GUI();
  app.gui.add(app.controls, 'rotationSpeed', 0, 1);
  app.gui.add(app.controls, 'bouncingSpeed', 0, 0.4);

  // The scene stores and keeps track of all the objects we're creating,
  // including the camera and the lights
  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera(
    60,  // field of view
    window.innerWidth / window.innerHeight,  // screen ratio
    0.1,  // near field (how close to the camera should we still see things)
    1000  // far field (how far away from the camera should we still see things)
  );

  // Where exactly is the camera in the scene?
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // app.camera.position.set(-30, 40, 30);

  app.camera.lookAt(app.scene.position);  // Look at the origin: x=0, y=0, z=0

  // The renderer calculates how to draw all the objects in the scene,
  // based on the lighting and the camera perspective, and renders
  // it all down to a 2D image to show in a <canvas> browser tag
  app.renderer = new THREE.WebGLRenderer();  // use hardware acceleration of gfx card!
  app.renderer.setSize( window.innerWidth, window.innerHeight );
  app.renderer.setClearColor( 0x000000 );  // background colour

  app.renderer.shadowMap.enabled = true;  // shadows are computationally expensive, and thus disabled by default
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // WTF???

  document.getElementById('output').appendChild( app.renderer.domElement );

  app.axes = new THREE.AxesHelper(40);
  app.scene.add(app.axes);

  // Let's add a 2D 'plane', i.e. a sheet, aka "The Runway"
  app.plane = app.createPlane();
  app.scene.add( app.plane );

  app.cube = new Array(20).fill(null);
  for (let i = 0; i < app.cube.length; i++) {
    app.cube[i] = app.createCube(15);
    app.scene.add( app.cube[i] );
  }

  app.sphere = app.createSphere();
  app.scene.add(app.sphere);

  // Let there be light!
  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.ambient = new THREE.AmbientLight( 0x555555 );
  app.scene.add( app.ambient );

  // Control camera position and zoom using the mouse
  app.mouseControls = new THREE.OrbitControls(
    app.camera,
    app.renderer.domElement
  );

  app.animate();  // kick off the animation process

}; // app.init()


app.animate = () => {

  app.controls.step += app.controls.bouncingSpeed;

  app.sphere.position.y = 6 + Math.abs(Math.sin(app.controls.step) * 40);
  app.sphere.position.x = 20 + Math.cos(app.controls.step) * 40;
  // app.sphere.position.x = Math.sin(app.controls.step)*10;
  // app.sphere.position.z = Math.cos(app.controls.step)*10;

  for (let i = 0; i < app.cube.length; i++) {
    app.cube[i].rotation.x += app.controls.rotationSpeed * Math.random();
    app.cube[i].rotation.y += app.controls.rotationSpeed * Math.random();
  };

  // Finally, actually render
  app.renderer.render( app.scene, app.camera );

  // Get the browser animation API to work out
  // how often to run our animate() method
  // (ideally, 60 times/sec and only when the tab
  // is visible)
  requestAnimationFrame(app.animate);

};

// Like jQuery $(document).ready() - run our function
// after the DOM is loaded
window.onload = app.init;
