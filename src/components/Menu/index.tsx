import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">
        <a>Incio</a>
      </Link>

      <Link href="/estagio/performace">
        <a>Performace do aluno</a>
      </Link>
    </nav>
  );
}
