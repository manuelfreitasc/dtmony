import { useState } from "react";
import Modal from "react-modal";
import { ButtonAnimeted } from "./components/buttonAnimeted";

import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { NewTransactionModal } from "./components/newTransactionModal";
import { TransactionsTable } from "./components/transactionsTable";

import { GlobalStyles } from "./styles/global";

//Modal.setAppElement("#yourAppElement");

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function hendleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function hendleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return (
        <>
            <Header onOpenNewTransactionModal={hendleOpenNewTransactionModal} />
            <Dashboard />
            <TransactionsTable />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={hendleCloseNewTransactionModal}
            />
            <GlobalStyles />
        </>
    );
}
