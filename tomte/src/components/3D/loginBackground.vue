<template>
  <div class="scene" ref="scene"/>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default {
  mounted() {
    const el = this.$refs.scene;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );

    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = false;

    this.renderer.setSize(el.clientWidth, el.clientHeight);
    this.renderer.setPixelRatio( window.devicePixelRatio );

    this.scene.background = new THREE.Color( '#ffffff' ); //0x8FBCD4
    el.appendChild(this.renderer.domElement);

    const geometry = new THREE.TetrahedronGeometry(5);
    const material = new THREE.MeshPhongMaterial({ color: '#0b3e70' });
    const cube = new THREE.Mesh(geometry, material);
    
    const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );
    const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
    mainLight.position.set( 10, 10, 10 );

    this.scene.add( ambientLight, mainLight );

    this.scene.add(cube);
    this.camera.position.z = 5;
    
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
}
</script>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>