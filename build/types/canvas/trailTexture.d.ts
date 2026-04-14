import * as THREE from "three";
import type { Base } from "../base/base";
import { Component } from "../components/component";
type Point = {
    x: number;
    y: number;
    age: number;
    force: number;
};
type TrailConfig = {
    /** texture size (default: 256x256) */
    size?: number;
    /** Max age (ms) of trail points (default: 750) */
    maxAge?: number;
    /** Trail radius (default: 0.3) */
    radius?: number;
    /** Canvas trail opacity (default: 0.2) */
    intensity?: number;
    /** Add points in between slow pointer events (default: 0) */
    interpolate?: number;
    /** Moving average of pointer force (default: 0) */
    smoothing?: number;
    /** Minimum pointer force (default: 0.3) */
    minForce?: number;
    /** Blend mode (default: 'screen') */
    blend?: CanvasRenderingContext2D["globalCompositeOperation"];
    /** Easing (default: easeCircOut) */
    ease?: (t: number) => number;
};
declare class TrailTextureImpl {
    trail: Point[];
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    texture: THREE.Texture;
    force: number;
    size: number;
    maxAge: number;
    radius: number;
    intensity: number;
    ease: (t: number) => number;
    minForce: number;
    interpolate: number;
    smoothing: number;
    blend: CanvasRenderingContext2D["globalCompositeOperation"];
    constructor({ size, maxAge, radius, intensity, interpolate, smoothing, minForce, blend, // source-over is canvas default. Others are slower
    ease, }?: TrailConfig);
    initTexture(): void;
    update(delta: number): void;
    clear(): void;
    addTouch(point: Point): void;
    drawTouch(point: Point): void;
}
/**
 * This class can create a trail texture.
 */
declare class TrailTexture extends Component {
    trailTexture: TrailTextureImpl;
    constructor(base: Base, config?: Partial<TrailConfig>);
    update(): void;
    onMove(p: Partial<Point>): void;
}
export { TrailTextureImpl, TrailTexture };
