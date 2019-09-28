import {
  Scene,
  Engine,
  Vector3,
  SceneLoader,
  ArcRotateCamera,
  HemisphericLight
} from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
import 'pepjs';

var canvas = document.querySelector('#glcanvas');
var engine = new Engine(canvas, true);

var createScene = function() {
  var scene = new Scene(engine);

  //Adding a light
  var light = new HemisphericLight();

  //Adding an Arc Rotate Camera
  var camera = new ArcRotateCamera('Camera', 0, 0.8, 10, Vector3.Zero(), scene);
  camera.attachControl(canvas, false);

  // The first parameter can be used to specify which mesh to import. Here we import all meshes
  SceneLoader.Append('./static/littlest_tokyo/', 'scene.gltf', scene, function(
    newMeshes
  ) {
    scene.activeCamera = null;
    scene.createDefaultCameraOrLight(true);
    scene.activeCamera.attachControl(canvas, false);
  });

  return scene;
};

var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});
