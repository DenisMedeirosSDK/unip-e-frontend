import { InternshipInfo } from '../components/internshipInfo';

import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.content}>
        <h1>Estágio supervisionado</h1>
        <InternshipInfo />
      </div>
    </div>
  );
}
