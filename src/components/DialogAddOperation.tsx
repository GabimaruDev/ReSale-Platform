import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useState, type FormEvent, type ReactNode } from "react";
import type { IAccounts, IOperation } from "../types";

interface DialogAddOperationProps {
    open: boolean;
    handleClose: () => void;
    operations: IOperation[];
    setOperations: (value: React.SetStateAction<IOperation[]>) => void;
    accounts: IAccounts;
    setAccounts: React.Dispatch<React.SetStateAction<IAccounts>>;
}

function DialogAddOperation(props: DialogAddOperationProps): ReactNode | Promise<ReactNode> {
    const { open, handleClose, operations, setOperations, accounts, setAccounts } = props;

    const [name, setName] = useState("");
    const [serialNumber, setSerialNumber] = useState(0);
    const [purchaseAmount, setPurchaseAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [account, setAccount] = useState("cash");

    const addOperation = (e: FormEvent) => {
        e.preventDefault();
        const operation = {
            date: new Date().toLocaleString("ru"),
            type: "Скупка товара",
            id: (operations[0] && Math.max(...operations.map((item) => item.id)) + 1) || 1,
            name: name,
            serialNumber: serialNumber,
            purchaseAmount: purchaseAmount,
            price: price,
            description: description,
            characteristics: characteristics,
            account: account,
        };

        if (operation.type == "Скупка товара") {
            if (account == "cash") {
                setAccounts({ cash: accounts.cash - purchaseAmount, card: accounts.card });
            } else if (account == "card") {
                setAccounts({ cash: accounts.cash, card: accounts.card - purchaseAmount });
            }
        }
        setOperations([...operations, operation]);
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Добавление операции</DialogTitle>
            <DialogContent>
                <form className="dialog__form" onSubmit={(e) => addOperation(e)} id="form">
                    <TextField
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        label="Наименование"
                        helperText="Пример: iPhone 15 Pro 256GB Black 2Sim"
                    />
                    <TextField
                        id="serialNumber"
                        onChange={(e) => setSerialNumber(Number(e.target.value))}
                        size="small"
                        label="Серийный номер"
                    />
                    <TextField
                        onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                        id="purchaseAmount"
                        required
                        label="Сумма скупки"
                    />
                    <TextField
                        onChange={(e) => setPrice(Number(e.target.value))}
                        id="price"
                        size="small"
                        label="Цена на витрине"
                    />
                    <TextField
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        size="small"
                        label="Описание"
                        helperText="Пример: Полный комплект"
                    />
                    <TextField
                        onChange={(e) => setCharacteristics(e.target.value)}
                        id="characteristics"
                        size="small"
                        label="Характеристики"
                        helperText='Пример: 6,1", OLED(120Гц), Титан, 8 RAM, 48Мп'
                    />
                </form>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Способ расчёта</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={account}
                        label="Способ расчёта"
                        onChange={(e) => setAccount(e.target.value)}
                    >
                        <MenuItem value={"cash"}>Касса</MenuItem>
                        <MenuItem value={"card"}>Карта</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button type="submit" form="form">
                    Подтвердить
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogAddOperation;
