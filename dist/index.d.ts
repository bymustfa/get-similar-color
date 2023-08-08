export interface IDefaultColor {
    name: string;
    hex?: string;
    rgb?: {
        r: number;
        g: number;
        b: number;
    };
}
interface IRgbColor {
    r: number;
    g: number;
    b: number;
}
export interface IGetSimilarColorOptions {
    targetColor: string | IRgbColor;
    colorArray: IDefaultColor[];
    similarityThreshold?: number;
}
export interface ISimilarColor {
    name: string;
    hex: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    similarity: number;
}
export {};
