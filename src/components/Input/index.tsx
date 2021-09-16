import React, { InputHTMLAttributes, useRef } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container, Label, InputText } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
}

export function Input({ title, name, ...rest }: Props) {
  const inputRef = useRef();
  return (
    <Container>
      <Label>{title}</Label>
      <InputText name={name} {...rest} />
    </Container>
  );
}
{
  /* <Container>
<Label>{title}</Label>
<Controller
  control={control}
  render={({ field: { onChange, value } }) => (
    <InputText onChange={onChange} value={value} {...rest} />
  )}
  name={name}
/>
</Container> */
}
