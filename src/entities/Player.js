import Phaser from "phaser";
import playerAnims from "./playerAnims";
class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.gravity = 500;
    this.playerSpeed = 150;
    this.initialize();
    this.initEvent();
  }

  initialize() {
    this.body.setGravityY(this.gravity);
    this.setCollideWorldBounds(true);
    playerAnims(this.scene.anims);
  }

  initEvent() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    const { left, right } = this.cursors;
    if (left.isDown) {
      this.setVelocityX(-this.playerSpeed);
      this.setFlipX(true);
    } else if (right.isDown) {
      this.setVelocityX(this.playerSpeed);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }

    this.body.velocity.x === 0
      ? this.play("idle", true)
      : this.play("run", true);
  }
}

export default Player;
