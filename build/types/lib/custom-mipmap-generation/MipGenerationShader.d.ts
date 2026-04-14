import { ShaderMaterialParameters, Vector2 } from "three";
export declare function clone(shader: ShaderMaterialParameters): {
    defines?: Record<string, unknown> | undefined;
    uniforms?: {
        [uniform: string]: import("three").IUniform<any>;
    } | undefined;
    uniformsGroups?: import("three").UniformsGroup[] | undefined;
    vertexShader?: string | undefined;
    fragmentShader?: string | undefined;
    linewidth?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    fog?: boolean | undefined;
    lights?: boolean | undefined;
    clipping?: boolean | undefined;
    extensions?: {
        clipCullDistance: boolean;
        multiDraw: boolean;
    } | undefined;
    defaultAttributeValues?: {
        color: [number, number, number];
        uv: [number, number];
        uv1: [number, number];
    } | undefined;
    index0AttributeName?: string | undefined;
    uniformsNeedUpdate?: boolean | undefined;
    glslVersion?: import("three").GLSLVersion | null | undefined;
    name?: string | undefined;
    blending?: import("three").Blending | undefined;
    side?: import("three").Side | undefined;
    vertexColors?: boolean | undefined;
    opacity?: number | undefined;
    transparent?: boolean | undefined;
    alphaHash?: boolean | undefined;
    blendSrc?: import("three").BlendingSrcFactor | undefined;
    blendDst?: import("three").BlendingDstFactor | undefined;
    blendEquation?: import("three").BlendingEquation | undefined;
    blendSrcAlpha?: import("three").BlendingSrcFactor | null | undefined;
    blendDstAlpha?: import("three").BlendingDstFactor | null | undefined;
    blendEquationAlpha?: import("three").BlendingEquation | null | undefined;
    blendColor?: import("three").ColorRepresentation | undefined;
    blendAlpha?: number | undefined;
    depthFunc?: import("three").DepthModes | undefined;
    depthTest?: boolean | undefined;
    depthWrite?: boolean | undefined;
    stencilWriteMask?: number | undefined;
    stencilFunc?: import("three").StencilFunc | undefined;
    stencilRef?: number | undefined;
    stencilFuncMask?: number | undefined;
    stencilFail?: import("three").StencilOp | undefined;
    stencilZFail?: import("three").StencilOp | undefined;
    stencilZPass?: import("three").StencilOp | undefined;
    stencilWrite?: boolean | undefined;
    clippingPlanes?: import("three").Plane[] | null | undefined;
    clipIntersection?: boolean | undefined;
    clipShadows?: boolean | undefined;
    shadowSide?: import("three").Side | null | undefined;
    colorWrite?: boolean | undefined;
    precision?: "highp" | "mediump" | "lowp" | null | undefined;
    polygonOffset?: boolean | undefined;
    polygonOffsetFactor?: number | undefined;
    polygonOffsetUnits?: number | undefined;
    dithering?: boolean | undefined;
    alphaToCoverage?: boolean | undefined;
    premultipliedAlpha?: boolean | undefined;
    forceSinglePass?: boolean | undefined;
    allowOverride?: boolean | undefined;
    visible?: boolean | undefined;
    toneMapped?: boolean | undefined;
    userData?: Record<string, any> | undefined;
    alphaTest?: number | undefined;
};
export declare const MipGenerationShader: {
    defines: {
        X_IS_EVEN: number;
        Y_IS_EVEN: number;
    };
    uniforms: {
        map: {
            value: null;
        };
        originalMapSize: {
            value: Vector2;
        };
        parentMapSize: {
            value: Vector2;
        };
        parentLevel: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
