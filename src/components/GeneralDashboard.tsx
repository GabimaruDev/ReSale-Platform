import { Box, Card } from "@mui/material";
import type { Operation } from "../types";
import "./generalDashboard.css";
import type { ReactNode } from "react";

interface GeneralDashboardProps {
    operations: Operation[];
}

function GeneralDashboard(props: GeneralDashboardProps): ReactNode | Promise<ReactNode> {
    const { operations } = props;
    const totalSales = operations.filter((t) => t.type === "sale").reduce((sum) => sum + 1, 0);

    return (
        <div className="section">
            <h2 className="title">Общая информация</h2>
            <Box className="cards">
                <Card className="card">
                    <p className="card__title">Приход</p>
                    <p>{totalSales}</p>
                    <p>{operations.filter((t) => t.type === "sale").length} транзакций</p>
                </Card>
                <Card className="card">
                    <p className="card__title">Расход</p>
                    <p>0</p>
                    <p>0 транзакций</p>
                </Card>
                <Card className="card">
                    <p className="card__title">Доход за сегодня</p>
                    <p>0</p>
                    <p>всего 0 транзакций</p>
                </Card>
                <Card className="card">
                    <p className="card__title">Доход за месяц</p>
                    <p>0 меньше на 100%</p>
                </Card>
            </Box>
        </div>
    );
}

export default GeneralDashboard;
