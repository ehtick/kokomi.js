import * as THREE from "three";
import { Component } from "./component";
import { Base } from "../base/base";
/**
 * An encapsuled class for `THREE.Timer`.
 * You can get `elapsedTime` and `deltaTime` from it.
 */
declare class Clock extends Component {
    timer: THREE.Timer;
    deltaTime: number;
    elapsedTime: number;
    constructor(base: Base);
    update(time: number): void;
}
export { Clock };
