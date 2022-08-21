export interface ContainerInterface {
    containerNumber: number;
    origin: string;
    destination: string;
    status: string;
    description: string;
    dimentions: string;
}

export interface CartInterface {
    issuesBy: string;
    qty: number;
    fee: number;
    total: number;
}