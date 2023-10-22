import Phaser from "phaser";
import playerAnims from "./playerAnims";
import collider from "../mixins/colliders";
class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");

    // assign mixis (function, method and property to this (player) class)
    Object.assign(this, collider);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.gravity = 300;
    this.playerSpeed = 150;
    this.jumpCount = 0;
    this.consecutiveCount = 1;

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
    const onFloor = this.body.onFloor();
    const { left, right, space, up } = this.cursors;
    const isSpaceDown = Phaser.Input.Keyboard.JustDown(space);

    if (left.isDown) {
      this.setVelocityX(-this.playerSpeed);
      this.setFlipX(true);
    } else if (right.isDown) {
      this.setVelocityX(this.playerSpeed);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }

    if ((space.isDown || up.isDown) && onFloor) {
      this.setVelocityY(-300);
    }

    if (isSpaceDown && this.jumpCount <= this.consecutiveCount) {
      this.setVelocityY(-300);
      this.jumpCount++;
    }

    if (onFloor) {
      this.jumpCount = 0;
    }

    onFloor
      ? this.body.velocity.x === 0
        ? this.play("idle", true)
        : this.play("run", true)
      : this.play("jump", true);
  }
}

export default Player;
