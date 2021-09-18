import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {title}
    </button>
  );
}
