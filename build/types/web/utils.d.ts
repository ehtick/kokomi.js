import * as THREE from "three";
export type HTMLAssetElement = HTMLImageElement | HTMLVideoElement;
declare const loadTextureFromImg: (el: HTMLImageElement | null) => THREE.Texture<HTMLImageElement> | null;
declare const loadCubemapFromImgs: (el: HTMLImageElement | null, els: HTMLImageElement[]) => THREE.CubeTexture<unknown> | null;
declare const getUniformFromAsset: (el: HTMLAssetElement | null, name: string, parent?: HTMLElement | null) => {
    [x: string]: {
        value: THREE.VideoTexture<HTMLVideoElement> | THREE.CubeTexture<unknown> | THREE.Texture<HTMLImageElement>;
    } | {
        value: THREE.Vector2;
    };
};
export { loadTextureFromImg, loadCubemapFromImgs, getUniformFromAsset };
