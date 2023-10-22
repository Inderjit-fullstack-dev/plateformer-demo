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

    this.load.spritesheet("player", "assets/player/move_sprite_1.png", {
      frameWidth: 32,
      frameHeight: 38,
      spacing: 32,
    });
  }
  create() {
    this.scene.start("Game");
  }
}

export default Preload;
