export interface ICalculatorOptionalData {
    id: number;
    title: string;
    subtitle: string;
    isChoose: boolean;
    count: number;
    price: string | number;
    type: string;
}

export interface IFlavors {
    id: number;
    name: string;
    cpu: number;
    memory: number;
    ssd: number;
    count: number;
    price: number;
    isChoose: boolean;
    type: string;

    [key: string]: any;
}
