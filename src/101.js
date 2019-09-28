import {
  Engine,
  Scene,
  Vector3,
  HemisphericLight,
  ArcRotateCamera,
  PointLight,
  MeshBuilder
} from '@babylonjs/core';
import 'pepjs';

var canvas = document.querySelector('#glcanvas');
var engine = new Engine(canvas, true);

var createScene = function() {
  var scene = new Scene(engine);
  var camera = new ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    new Vector3(0, 0, 5),
    scene
  );
  camera.attachControl(canvas, true);

  new HemisphericLight('light1', new Vector3(1, 1, 0), scene);
  new PointLight('light2', new Vector3(0, 1, -1), scene);

  MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene);

  return scene;
};

var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});
