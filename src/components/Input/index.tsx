import React, { InputHTMLAttributes } from 'react';
import { inputMaskZipcode, inputMaskRegistrationRA } from '../../utils/masks';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  mask?: 'zipcode' | 'RA';
}

export function Input({ title, mask, ...rest }: Props) {
  function handleKeyUp(event: React.FormEvent<HTMLInputElement>) {
    if (mask === 'zipcode') {
      inputMaskZipcode(event);
    }
    if (mask === 'RA') {
      inputMaskRegistrationRA(event);
    }

    [mask];
  }

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <input className={styles.input} {...rest} onKeyUp={handleKeyUp} />
    </div>
  );
}
