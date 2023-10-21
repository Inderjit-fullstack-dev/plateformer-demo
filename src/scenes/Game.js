import Phaser from "phaser";

class Game extends Phaser.Scene {
  constructor(config) {
    super("Game");
    this.config = config;
  }

  create() {
    this.add.image(400, 300, "sky");
  }
  update() {}
}

export default Game;
