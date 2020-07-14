let cubeLogo = document.getElementById('logo3d');

let viewer = new BabylonViewer.DefaultViewer(cubeLogo, {
  scene: {
    debug: true,
  },
  camera: {
    behaviors: {
      autoRotate: 0,
    },
  },
  model: {
    url:
      'https://raw.githubusercontent.com/r-nold/babylon-testing/master/ID-cube.glb',
  },
});
