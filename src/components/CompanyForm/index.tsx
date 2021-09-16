import React, { useEffect, useState } from 'react';
import { Input } from '../Input';

import { Container, Form, SubTitle } from './styles';

interface Address {
  zipcode: string;
  street: string;
  streetNumber: number;
  complement: string;
  city: string;
  state: string;
}

interface Company {
  razao_social: string;
  nome_fantasia: string;
  cnae_fiscal_descricao: string;
  cep: string;
  numero: string;
  complemento: string;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
}

export function CompanyForm() {
  const [cnpj, setCNPJ] = useState('');
  const [corporateName, setCorporateName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    async function searchCompany() {
      if (cnpj === '') return;
      if (cnpj.length !== 14) return;

      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
      );
      const company: Company = await response.json();
      console.log(company);

      setCorporateName(company.razao_social);
      setFantasyName(company.nome_fantasia);
      setDescription(company.cnae_fiscal_descricao);
      setZipcode(company.cep);
      setComplement(company.complemento);
      setStreetNumber(company.numero);
      setPhone(company.ddd_telefone_1);
      setCellPhone(company.ddd_telefone_2);
    }

    searchCompany();
  }, [cnpj]);

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
        <SubTitle>Dados da empresa</SubTitle>
        <Input
          title="CNPJ"
          name=""
          placeholder="CNPJ"
          value={cnpj}
          onChange={event => setCNPJ(event.target.value)}
        />
        <Input
          title="Nome da empresa"
          name=""
          placeholder="Nome da empresa"
          value={corporateName}
          onChange={event => setCorporateName(event.target.value)}
        />
        <Input
          title="Nome fantasia"
          name=""
          placeholder="Nome fantasia"
          value={fantasyName}
          onChange={event => setFantasyName(event.target.value)}
        />
        <Input
          title="Atividade da Unidade Concedente"
          name=""
          placeholder="Atividade da Unidade Concedente"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <Input
          title="Telefone"
          name=""
          placeholder="Telefone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <Input
          title="Celular"
          name=""
          placeholder="Celular"
          value={cellPhone}
          onChange={event => setCellPhone(event.target.value)}
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
          value={state}
          onChange={event => setState(event.target.value)}
        />
      </Form>
    </Container>
  );
}
