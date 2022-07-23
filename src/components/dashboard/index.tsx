import { ButtonAnimeted } from "../buttonAnimeted";
import { Summary } from "../summary";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
          <Summary />
          <ButtonAnimeted />
        </Container>
    )
}
