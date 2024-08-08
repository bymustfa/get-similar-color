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
    targetColor: string | IRgbColor | {
        h: number;
        s: number;
        l: number;
    } | {
        h: number;
        s: number;
        v: number;
    };
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
declare function getSimilarColor(options: IGetSimilarColorOptions): ISimilarColor | null;
export default getSimilarColor;
