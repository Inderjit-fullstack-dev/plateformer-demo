import Phaser from "phaser";

class Game extends Phaser.Scene {
  constructor(config) {
    super("Game");
    //this.config = config;
    //console.log(this.config);
    this.playerSpeed = 300;
    this.player = null;
  }

  create() {
    const map = this.createMap();
    const { collider } = this.createLayer(map);
    this.player = this.createPlayer();
    this.physics.add.collider(this.player, collider);
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    const { left, right } = this.cursors;
    if (left.isDown) {
      console.log("left");
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
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

  createPlayer() {
    const player = this.physics.add.sprite(50, 200, "player");
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);

    return player;
  }
}

export default Game;
