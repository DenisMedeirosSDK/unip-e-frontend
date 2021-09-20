import Link from 'next/link';

import { InternshipInfo } from '../components/internshipInfo';

import UnipLogoSvg from '../assets/logo-unip.svg';

import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <UnipLogoSvg />
        <p>Orientação de estágio</p>
        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.menuText}>Inicio</a>
          </Link>
          <Link href="/estagio/performace">
            <a className={styles.menuText}>Performace do aluno</a>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <h1>Estágio supervisionado</h1>
        <InternshipInfo />
      </div>
    </div>
  );
}
