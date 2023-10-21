import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("sky", "assets/sky.png");
  }
  create() {
    this.scene.start("Game");
  }
}

export default Preload;
