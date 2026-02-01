import type { IAccounts } from "../types";

interface AccountsProps {
    accounts: IAccounts;
}

function Accounts(props: AccountsProps) {
    const { accounts } = props;
    return (
        <>
            <div>Касса: {accounts.cash}</div>
            <div>Счёт: {accounts.card}</div>
        </>
    );
}

export default Accounts;
