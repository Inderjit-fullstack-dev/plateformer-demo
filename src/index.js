import Phaser from "phaser";
import Game from "./scenes/Game";
import Preload from "./scenes/Preload";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Preload, Game],
};

new Phaser.Game(config);
