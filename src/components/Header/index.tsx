import React from 'react';

import { Menu } from '../Menu';

import UnipLogoSvg from '../../assets/logo-unip.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <UnipLogoSvg />
        <p>Orientação de estágio</p>
      </div>
      <Menu />
    </>
  );
}
