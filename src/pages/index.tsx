import Link from 'next/link';

import { InternshipInfo } from '../components/internshipInfo';

import UnipLogoSvg from '../assets/logo-unip.svg';

import styles from '../styles/surveyPerformace.module.css';
import { Container, Header, Content, Title, Divider } from '../styles/Home';

export default function Home() {
  return (
    <Container>
      <Header>
        <UnipLogoSvg />
        <Title>Orientação de estágio</Title>
        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.menuText}>Inicio</a>
          </Link>
          <Link href="/estagio/performace">
            <a className={styles.menuText}>Performace do aluno</a>
          </Link>
        </div>
      </Header>
      <Content>
        <h1>Estágio supervisionado</h1>
        <InternshipInfo />
      </Content>
    </Container>
  );
}
