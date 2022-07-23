import Modal from "react-modal";
import { Container, RadioBox } from "./styles";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import close from "../../assets/close.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { animation } from "polished";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");

    const [type, setType] = useState("whithdraw");

    function hendleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
       const data = {
            title,
            value,
            category,
            type
        }

        api.post("transactions", data)
    }

    return (
        <Modal
            overlayClassName="react-modal-overflow"
            className="react-modal-content"
            isOpen={isOpen}
            onRequestClose={onRequestClose}

        >
            <button
                className="react-modal-close"
                type="button"
                onClick={onRequestClose}
            >
                <img src={close} alt="close" />
            </button>

            <Container onSubmit={hendleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                />
                <div>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={income} alt="entrada" />
                        <p>Entrada</p>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("whithdraw")}
                        isActive={type === "whithdraw"}
                        activeColor="red"
                    >
                        <img src={outcome} alt="saida" />
                        <p>Saida</p>
                    </RadioBox>
                </div>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button className="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
