import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import type { ReactNode } from "react";

interface DialogAddOperationProps {
    open: boolean;
    handleClose: () => void;
}

function DialogAddOperation(props: DialogAddOperationProps): ReactNode | Promise<ReactNode> {
    const { open, handleClose } = props;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Добавление операции</DialogTitle>
            <DialogContent>
                <form className="dialog__form" onSubmit={() => {}} id="form">
                    <TextField
                        id="name"
                        autoFocus
                        required
                        label="Наименование"
                        helperText="Пример: iPhone 15 Pro 256GB Black 2Sim"
                    />
                    <TextField id="serialNumber" size="small" label="Серийный номер" />
                    <TextField id="purchaseAmount" required label="Сумма скупки" />
                    <TextField id="price" size="small" label="Цена на витрине" />
                    <TextField id="description" size="small" label="Описание" helperText="Пример: Полный комплект" />
                    <TextField
                        id="characteristics"
                        size="small"
                        label="Характеристики"
                        helperText='Пример: 6,1", OLED(120Гц), Титан, 8 RAM, 48Мп'
                    />
                </form>
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
