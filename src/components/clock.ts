import * as THREE from "three";

import { Component } from "./component";
import { Base } from "../base/base";

/**
 * An encapsuled class for `THREE.Timer`.
 * You can get `elapsedTime` and `deltaTime` from it.
 */
class Clock extends Component {
  timer: THREE.Timer;
  deltaTime: number;
  elapsedTime: number;

  constructor(base: Base) {
    super(base);

    this.timer = new THREE.Timer();

    this.deltaTime = 0;
    this.elapsedTime = 0;
  }

  update(time: number): void {
    // ❗核心：必须先 update
    this.timer.update(time);

    // 直接拿
    this.deltaTime = this.timer.getDelta();
    this.elapsedTime = this.timer.getElapsed();

    this.emit("tick");
  }
}

export { Clock };
