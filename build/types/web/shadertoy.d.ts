import { Base } from "../base/base";
declare class Sketch extends Base {
    create(fragmentShader: string, uniforms?: {}): void;
}
/**
 * You can use `<shader-toy></shader-toy>` tag to setup a shadertoy environment in html.
 *
 * Demos: https://github.com/alphardex/shadertoy-playground
 */
declare class ShaderToyElement extends HTMLElement {
    container: HTMLElement | null;
    sketch: Sketch | null;
    constructor();
    static register(): void;
    connectedCallback(): void;
    get elId(): string;
    get containerId(): string;
    get fragShader(): string;
    getTextureUniform(name: string): {
        [x: string]: {
            value: import("three").VideoTexture<HTMLVideoElement> | import("three").CubeTexture<unknown> | import("three").Texture<HTMLImageElement>;
        } | {
            value: import("three").Vector2;
        };
    };
    get uniforms(): {
        [x: string]: {
            value: import("three").VideoTexture<HTMLVideoElement> | import("three").CubeTexture<unknown> | import("three").Texture<HTMLImageElement>;
        } | {
            value: import("three").Vector2;
        };
    };
    createContainer(): void;
    create(): void;
}
export { ShaderToyElement };
