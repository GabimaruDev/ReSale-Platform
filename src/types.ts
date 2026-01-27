export interface Operation {
    name: string;
    type: "purchase" | "sale";
    serialNumber: number;
    purchaseAmount: number;
    price: number;
    description: string;
    characteristics: string;
    date: Date;
    responsiblePerson: string;
}
