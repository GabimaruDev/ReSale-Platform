import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./operations.css";
import { useState } from "react";
import DialogAddOperation from "./DialogAddOperation";
import { useLocalStorage } from "usehooks-ts";
import type { Operation } from "../types";

function Operations() {
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [catalog, _setCatalog, _removeCatalog] = useLocalStorage("catalog", [] as Operation[]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="operation-title">
                <h2>Операции</h2>
                <Button onClick={handleClickOpen} variant="contained">
                    Добавить операцию
                </Button>
                <DialogAddOperation open={open} handleClose={handleClose} />
            </div>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="right">Цена продажи</TableCell>
                            <TableCell align="right">Ответственное лицо</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {catalog.length != 0 &&
                            catalog.map((catalog) => (
                                <TableRow key={catalog.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell>{catalog.date as unknown as string}</TableCell>
                                    <TableCell>ID</TableCell>
                                    <TableCell component="th" scope="row">
                                        {catalog.name}
                                    </TableCell>
                                    <TableCell align="right">{catalog.price}</TableCell>
                                    <TableCell align="right">{catalog.responsiblePerson}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Operations;
