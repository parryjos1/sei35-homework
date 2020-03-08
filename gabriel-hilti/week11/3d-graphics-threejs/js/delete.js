// If the app variable already exists, then reuse it,
// otherwise initialise it to an empty object
// (only works for 'var' because of 'hoisting')
var app = app || {};

// necessary:
// - scene (space)
// - camera (observer)
// - light
// - renderer (time)

app.init = () => {
  console.log('huhu');

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

  // Let there be light!
  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  // Finally, actually render everything once
  app.renderer.render( app.scene, app.camera );
}; // app.init()

// Like jQuery $(document).ready() - run our function
// after the DOM is loaded
window.onload = app.init;
