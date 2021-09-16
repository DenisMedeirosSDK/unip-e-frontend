import { Container, Header, Content, Title, Divider } from '../styles/Home';

import UnipLogoSvg from '../assets/logo-unip.svg';
import { StudentForm } from '../components/StudentForm';
import { CompanyForm } from '../components/CompanyForm';

export default function Home() {
  return (
    <Container>
      <Header>
        <UnipLogoSvg />
        <Title>Orientação de estágio</Title>
      </Header>
      <Content>
        <h1>Estágio supervisionado</h1>
        <StudentForm />
        <Divider />
        <CompanyForm />
      </Content>
    </Container>
  );
}
