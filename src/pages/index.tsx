import UnipLogoSvg from '../assets/logo-unip.svg';

import { Container, Header, Content, Title, Divider } from '../styles/Home';
import { InternshipInfo } from '../components/internshipInfo';

export default function Home() {
  return (
    <Container>
      <Header>
        <UnipLogoSvg />
        <Title>Orientação de estágio</Title>
      </Header>
      <Content>
        <h1>Estágio supervisionado</h1>
        <InternshipInfo />
      </Content>
    </Container>
  );
}
