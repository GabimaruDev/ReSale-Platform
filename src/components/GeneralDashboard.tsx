import { Box, Card } from "@mui/material";
import type { IOperation } from "../types";
import "./generalDashboard.css";
import type { ReactNode } from "react";

interface GeneralDashboardProps {
    operations: IOperation[];
}

function GeneralDashboard(props: GeneralDashboardProps): ReactNode | Promise<ReactNode> {
    const { operations } = props;
    const totalSales = operations.filter((t) => t.type === "Продажа товара");
    const totalPurchase = operations.filter((t) => t.type === "Скупка товара");

    return (
        <div className="section">
            <h2 className="title">Общая информация</h2>
            <Box className="cards">
                <Card className="card">
                    <p className="card__title">Приход</p>
                    <div className="card__main">
                        <p className="card__calc">{totalSales.reduce((sum) => sum, 0)} ₽</p>
                        <p className="card__info">{totalSales.length} транзакций</p>
                    </div>
                </Card>
                <Card className="card">
                    <p className="card__title">Расход</p>
                    <div className="card__main">
                        <p className="card__calc">
                            {totalPurchase.reduce((sum, item) => sum + item.purchaseAmount, 0)} ₽
                        </p>
                        <p className="card__info">{totalPurchase.length} транзакций</p>
                    </div>
                </Card>
                <Card className="card">
                    <p className="card__title">Доход за сегодня</p>
                    <div className="card__main">
                        <p className="card__calc">0 ₽</p>
                        <p className="card__info">всего 0 транзакций</p>
                    </div>
                </Card>
                <Card className="card">
                    <p className="card__title">Доход за месяц</p>
                    <div className="card__main">
                        <p className="card__calc">0 ₽</p>
                        <p className="card__info">меньше на 100%</p>
                    </div>
                </Card>
            </Box>
        </div>
    );
}

export default GeneralDashboard;
