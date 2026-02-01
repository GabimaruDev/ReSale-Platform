import { Tab } from "@mui/material";
import "./App.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import GeneralDashboard from "./components/GeneralDashboard";
import Operations from "./components/Operations";
import Accounts from "./components/Accounts";
import Catalog from "./components/Catalog";
import Settings from "./components/Settings";
import type { IOperation } from "./types";
import { useLocalStorage } from "usehooks-ts";
import Header from "./components/Header";

function App() {
    const [operations, setOperations] = useLocalStorage("operations", [] as IOperation[]);
    const [accounts, setAccounts] = useLocalStorage("accounts", { cash: 0, card: 0 });
    const [value, setValue] = useState("1");
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="wrapper">
            <Header />
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
                        <GeneralDashboard operations={operations} />
                    </TabPanel>
                    <TabPanel value="2">
                        <Operations
                            operations={operations}
                            setOperations={setOperations}
                            setAccounts={setAccounts}
                            accounts={accounts}
                        />
                    </TabPanel>
                    <TabPanel value="3">
                        <Accounts accounts={accounts} />
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
