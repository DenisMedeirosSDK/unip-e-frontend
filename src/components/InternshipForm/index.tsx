import React, { useState } from 'react';
import { Input } from '../Input';

import { Container, Form, SubTitle } from './styles';

export function InternshipForm() {
  const [nameAdvisor, setNameAdvisor] = useState('');
  const [rgAdvisor, setRGAdvisor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endtDate, setEndtDate] = useState('');
  const [totalHours, setTotalHours] = useState('');

  return (
    <Container>
      <Form>
        <SubTitle>Dados do estágio</SubTitle>
        <Input
          title="Nome do orientador"
          name=""
          placeholder="Nome do orientador"
          value={nameAdvisor}
          onChange={event => setNameAdvisor(event.target.value)}
        />
        <Input
          title="RG do orientador"
          name=""
          placeholder="RG do orientador"
          value={rgAdvisor}
          onChange={event => setRGAdvisor(event.target.value)}
        />
        <Input
          title="Data de Inicio"
          name=""
          placeholder="Data de Inicio"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
        />
        <Input
          title="Data de Termino"
          name=""
          placeholder="Data de Termino"
          value={endtDate}
          onChange={event => setEndtDate(event.target.value)}
        />
        <Input
          title="Total de horas"
          name=""
          placeholder="Total de horas"
          value={totalHours}
          onChange={event => setTotalHours(event.target.value)}
        />
      </Form>
    </Container>
  );
}
