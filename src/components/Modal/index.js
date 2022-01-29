import {
  Overlay,
  Container,
  Footer,
} from './styles';

import Button from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do Modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancelButton"> Cancelar</button>
          <Button type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
