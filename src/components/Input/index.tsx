import React, { InputHTMLAttributes, useRef } from 'react';
import { inputMaskZipcode, inputMaskRegistrationRA } from '../../utils/masks';

import { Container, Label, InputText } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  mask?: 'zipcode' | 'RA';
}

export function Input({ title, name, mask, ...rest }: Props) {
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
    <Container>
      <Label>{title}</Label>
      <InputText name={name} {...rest} onKeyUp={handleKeyUp} />
    </Container>
  );
}
