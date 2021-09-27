import React, { InputHTMLAttributes } from 'react';

import {
  inputMaskZipcode,
  inputMaskRegistrationRA,
  inputMaskRG,
  inputMaskCNPJ,
  inputMaskDate,
  inputMaskPhone,
} from '../../utils/masks';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  mask?: 'zipcode' | 'RA' | 'RG' | 'CNPJ' | 'date' | 'phone';
  name?: string;
}

export function Input({ title, mask, name, ...rest }: Props) {
  async function handleKeyUp(event: React.FormEvent<HTMLInputElement>) {
    switch (mask) {
      case 'zipcode':
        inputMaskZipcode(event);
        break;
      case 'RA':
        inputMaskRegistrationRA(event);
        break;
      case 'RG':
        inputMaskRG(event);
        break;
      case 'CNPJ':
        inputMaskCNPJ(event);
        break;
      case 'date':
        inputMaskDate(event);
        break;
      case 'phone':
        inputMaskPhone(event);
        break;

      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <input
        id={name}
        name={name}
        className={styles.input}
        onKeyUp={handleKeyUp}
        onChangeCapture={handleKeyUp}
        {...rest}
      />
    </div>
  );
}
