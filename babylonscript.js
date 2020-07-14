let domElement = document.getElementById('logo3d');

let viewer = new BabylonViewer.DefaultViewer(domElement, {
  scene: {
    debug: true,
  },
  camera: {
    behaviors: {
      autoRotate: 0,
    },
  },
  model: {
    url: 'https://playground.babylonjs.com/scenes/Rabbit.babylon',
  },
});
