import { Wrapper } from './Header.styles';
import Container from '../Container';

export default function Header({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
