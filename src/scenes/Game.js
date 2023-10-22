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

    this.addPlayerCollider(player, {
      colliders: {
        platformCollider: collider,
      },
    });

    this.setFollowupCamera(player);
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
    const collider = map.createStaticLayer("collider", tileset1);

    console.log(collider);
    collider.setCollisionByExclusion(-1, true);

    const environment = map.createStaticLayer("environment", tileset1);

    return { platform, environment, collider };
  }

  addPlayerCollider(player, { colliders }) {
    player.addCollider(colliders.platformCollider);
  }

  setFollowupCamera(player) {
    this.cameras.main.startFollow(player);
  }
}

export default Game;
