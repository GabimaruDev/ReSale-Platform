import { Tab } from "@mui/material";
import "./App.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import GeneralDashboard from "./components/GeneralDashboard";
import Operations from "./components/Operations";
import Accounts from "./components/Accounts";
import Catalog from "./components/Catalog";
import Settings from "./components/Settings";
import type { Operation } from "./types";

function App() {
    const [value, setValue] = useState("1");
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const OperationsTEST: Operation[] = [
        {
            name: "iPhone 13 128GB",
            type: "purchase",
            serialNumber: 1,
            purchaseAmount: 1,
            price: 1,
            description: "description",
            characteristics: "characteristics",
            date: new Date(),
            responsiblePerson: "",
        },
        {
            name: "iPhone 15 Pro 256GB",
            type: "sale",
            serialNumber: 2,
            purchaseAmount: 2,
            price: 2,
            description: "description",
            characteristics: "characteristics",
            date: new Date(),
            responsiblePerson: "",
        },
    ];

    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="title main-title">Resale Platform</h1>
                <p className="title-description">Управляйте товарами, клиентами и отслеживайте финансовые показатели</p>
            </header>
            <main className="main">
                <TabContext value={value}>
                    <TabList onChange={handleChange}>
                        <Tab value="1" label="Главная" />
                        <Tab value="2" label="Операции" />
                        <Tab value="3" label="Счета" />
                        <Tab value="4" label="Каталог" />
                        <Tab value="5" label="Настройки" />
                    </TabList>
                    <TabPanel value="1">
                        <GeneralDashboard operations={OperationsTEST} />
                    </TabPanel>
                    <TabPanel value="2">
                        <Operations />
                    </TabPanel>
                    <TabPanel value="3">
                        <Accounts />
                    </TabPanel>
                    <TabPanel value="4">
                        <Catalog />
                    </TabPanel>
                    <TabPanel value="5">
                        <Settings />
                    </TabPanel>
                </TabContext>
            </main>
            <footer className="footer">
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default App;
