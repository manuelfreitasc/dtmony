import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
        api.get("transactions").then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    return (
        <Container>
            <Content>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {
                                    new Intl.NumberFormat("pt",{
                                        style: "currency",
                                        currency: "AOA"
                                    }).format(transaction.amount)
                                }
                            </td>
                            <td>{transaction.category}</td>
                            <td>{
                                    new Intl.DateTimeFormat("pt").format(
                                        new Date(transaction.createAt)
                                    )}</td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </Container>
    );
}
