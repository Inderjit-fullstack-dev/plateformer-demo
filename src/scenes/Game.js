import Phaser from "phaser";
import Player from "../entities/Player";

class Game extends Phaser.Scene {
  constructor(config) {
    super("Game");
    this.playerSpeed = 300;
  }

  create() {
    const map = this.createMap();
    const { collider } = this.createLayer(map);
    const player = new Player(this, 50, 200);
    this.physics.add.collider(player, collider);
  }

  createMap() {
    return this.make.tilemap({
      key: "map",
      tileWidth: 16,
      tileHeight: 16,
    });
  }

  createLayer(map) {
    const tileset1 = map.addTilesetImage("main_lev_build_1", "tiles-1");
    const platform = map.createStaticLayer("Platform", tileset1);
    const collider = map.createStaticLayer("Collider", tileset1);

    collider.setCollisionByExclusion(-1, true);

    const environment = map.createStaticLayer("Environment", tileset1);

    return { platform, environment, collider };
  }
}

export default Game;
