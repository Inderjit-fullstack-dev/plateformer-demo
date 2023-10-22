import Phaser from "phaser";
import Game from "./scenes/Game";
import Preload from "./scenes/Preload";

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 320,
  scale: {
    mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      // debug: true,
    },
  },
  scene: [Preload, Game],
};

new Phaser.Game(config);
