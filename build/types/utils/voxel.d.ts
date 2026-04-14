import * as THREE from "three";
export interface Voxel {
    position: THREE.Vector3;
    color?: THREE.Color;
}
/**
 * A utility class to voxelize meshes or models.
 * Ref: https://tympanus.net/codrops/2023/03/28/turning-3d-models-to-voxel-art-with-three-js/
 */
declare class Voxelizer {
    raycaster: THREE.Raycaster;
    constructor();
    isInsideMesh(pos: THREE.Vector3, mesh: THREE.Mesh, dir?: THREE.Vector3): boolean;
    voxelizeMesh(mesh: THREE.Mesh, gridSize: number, dir?: THREE.Vector3, boundingBoxFunc?: (boundingBox: THREE.Box3) => void): {
        position: THREE.Vector3;
    }[];
    voxelizeModel(scene: THREE.Group, gridSize: number, modelSize: number, dir?: THREE.Vector3, boundingBoxFunc?: (boundingBox: THREE.Box3) => void): Voxel[];
}
export { Voxelizer };
