import React, { useEffect, useState } from 'react';

import { Input } from '../Input';

import { Container, SubTitle, Form } from './styles';

interface Address {
  zipcode: string;
  street: string;
  streetNumber: number;
  complement: string;
  city: string;
  state: string;
}

export function StudentForm() {
  const [name, setName] = useState('');
  const [registration, setRegistration] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    async function searchZipcode() {
      if (zipcode === '') return;
      const formattedZipcode = zipcode.replace('-', '');
      if (formattedZipcode.length !== 8) return;

      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${formattedZipcode}`
      );
      const address: Address = await response.json();

      setStreet(address.street);
      setCity(address.city);
      setState(address.state);
    }

    searchZipcode();
  }, [zipcode]);

  return (
    <Container>
      <Form>
        <SubTitle>Dados do estágiario</SubTitle>
        <Input
          title="Nome"
          placeholder="Nome"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          title="Matricula - (RA)"
          placeholder="Matricula - (RA)"
          name="registration"
          style={{ textTransform: 'uppercase' }}
          mask="RA"
          value={registration}
          onChange={event => setRegistration(event.target.value)}
        />
        <Input
          title="Curso"
          placeholder="Curso"
          name="course"
          value={course}
          onChange={event => setCourse(event.target.value)}
        />
        <Input
          title="Semestre"
          placeholder="Semestre"
          name="semester"
          maxLength={2}
          value={semester}
          onChange={event => setSemester(event.target.value)}
        />
        <Input
          title="CEP"
          placeholder="CEP"
          name="address.zipcode"
          mask="zipcode"
          value={zipcode}
          onChange={event => setZipcode(event.target.value)}
        />
        <Input
          title="Endereço"
          placeholder="Endereço"
          name="address.street"
          value={street}
          onChange={event => setStreet(event.target.value)}
        />
        <Input
          title="Numero"
          placeholder="Numero"
          name="address.streetNumber"
          maxLength={5}
          value={streetNumber}
          onChange={event => setStreetNumber(event.target.value)}
        />
        <Input
          title="Complemento"
          placeholder="Complemento"
          name="address.complement"
          value={complement}
          onChange={event => setComplement(event.target.value)}
        />
        <Input
          title="Cidade"
          placeholder="Cidade"
          name="address.city"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <Input
          title="Estado"
          placeholder="Estado"
          name="address.state"
          maxLength={2}
          style={{ textTransform: 'uppercase' }}
          value={state}
          onChange={event => setState(event.target.value)}
        />
      </Form>
    </Container>
  );
}
