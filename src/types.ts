export interface IOperation {
    date: string;
    type: string;
    id: number;
    name: string;
    type: "purchase" | "sale";
    serialNumber: number;
    purchaseAmount: number;
    price: number;
    description: string;
    characteristics: string;
    date: Date;
    responsiblePerson: string;
    account: string;
}

export interface IAccounts {
    cash: number;
    card: number;
}

