import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import { Container } from "./styles";


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="" />
                </header>
                <strong>AOA$7000,77</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="" />
                </header>
                <strong>AOA$4000,77</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="" />
                </header>
                <strong>AOA$3000,00</strong>
            </div>
        </Container>
    )
}
