import { Button, Paper } from "@mui/material";
import "./operations.css";
import { useState } from "react";
import DialogAddOperation from "./DialogAddOperation";
import { DataGrid, GridActionsCell, GridActionsCellItem, GridDeleteIcon } from "@mui/x-data-grid";
import type { GridColDef, GridRowId } from "@mui/x-data-grid";
import type { IAccounts, IOperation } from "../types";

interface OperationsProps {
    operations: IOperation[];
    setOperations: (value: React.SetStateAction<IOperation[]>) => void;

    accounts: IAccounts;
    setAccounts: React.Dispatch<React.SetStateAction<IAccounts>>;
}

function Operations(props: OperationsProps) {
    const { operations, setOperations, accounts, setAccounts } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        const operationById = operations.filter((row) => row.id === id);
        const operation = operationById[0];
        console.log();
        if (operation.type == "Скупка товара") {
            if (operation.account == "cash") {
                setAccounts({ cash: accounts.cash + operation.purchaseAmount, card: accounts.card });
            } else if (operation.account == "card") {
                setAccounts({ cash: accounts.cash, card: accounts.card + operation.purchaseAmount });
            }
        } else if (operation.type == "Продажа товара") {
            if (operation.account == "cash") {
                setAccounts({ cash: accounts.cash - operation.purchaseAmount, card: accounts.card });
            } else if (operation.account == "card") {
                setAccounts({ cash: accounts.cash, card: accounts.card - operation.purchaseAmount });
            }
        }
        setOperations((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const columns: GridColDef[] = [
        { field: "date", headerName: "Дата", width: 160, disableColumnMenu: true, sortingOrder: ["desc"] },
        { field: "type", headerName: "Операция", width: 120, disableColumnMenu: true },
        { field: "id", headerName: "ID", width: 90, type: "number", disableColumnMenu: true },
        { field: "name", headerName: "Название операции", width: 240, disableColumnMenu: true },
        {
            field: "purchaseAmount",
            headerName: "Сумма",
            type: "number",
            width: 80,
            headerAlign: "left",
            disableColumnMenu: true,
        },
        { field: "client", headerName: "Клиент", width: 120, disableColumnMenu: true },
        { field: "employee", headerName: "Сотрудник", width: 140, disableColumnMenu: true },
        {
            field: "functions",
            headerName: "Функции",
            width: 150,
            renderCell: (params) => (
                <GridActionsCell {...params}>
                    <GridActionsCellItem
                        onClick={handleDeleteClick(params.id)}
                        icon={<GridDeleteIcon />}
                        label="Удалить"
                    />
                </GridActionsCell>
            ),
        },
    ];

    const paginationModel = { page: 0, pageSize: 10 };
    return (
        <div className="operations">
            <div className="operations__title">
                <h2 className="title">Операции</h2>
                <Button onClick={handleClickOpen} variant="contained">
                    Добавить операцию
                </Button>
                <DialogAddOperation
                    open={open}
                    handleClose={handleClose}
                    operations={operations}
                    setOperations={setOperations}
                    setAccounts={setAccounts}
                    accounts={accounts}
                />
            </div>
            <Paper sx={{ height: "100%", width: "100%" }}>
                <DataGrid
                    rowSelection={false}
                    rows={operations}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10, 25, 50, 100]}
                    autoHeight
                    sx={{ border: 0 }}
                />
                {}
            </Paper>
        </div>
    );
}

export default Operations;
