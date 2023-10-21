import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("tiles-1", "assets/levels/main_lev_build_1.png");

    this.load.tilemapTiledJSON("map", "assets/levels/demo.json");
    //this.load.tilemapTiledJSON("map", "assets/levels/crystal_world_map.json");
    //this.load.image("tiles-2", "assets/levels/main_lev_build_2.png");

    this.load.image("player", "assets/player/movements/idle01.png");
  }
  create() {
    this.scene.start("Game");
  }
}

export default Preload;
