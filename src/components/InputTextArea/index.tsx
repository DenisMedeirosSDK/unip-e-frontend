import React, { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  register?: any;
  error?: FieldError;
}

export function InputTextArea({
  name,
  register,
  error = null,
  ...rest
}: Props) {
  return (
    <div className={styles.container}>
      <textarea
        id={name}
        name={name}
        className={styles.input}
        minLength={50}
        maxLength={1000}
        {...register}
        {...rest}
      />
      {!!error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
}
