import React, { useEffect, useState } from 'react';

import { Input } from '../Input';

import { generatePDFMake } from '../../utils/generatePDFMake';
import { Address, InternshipInfoDTO } from '../../dtos/InternshipInfodto';

import { Container, Divider, Form, SubTitle } from './styles';

interface BrasilAPICNPJResponse {
  razao_social: string;
  nome_fantasia: string;
  cnae_fiscal_descricao: string;
  cep: string;
  numero: string;
  complemento: string;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
}

export function InternshipInfo() {
  const [name, setName] = useState('');
  const [registration, setRegistration] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [office, setOffice] = useState('');
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

  const [cnpj, setCNPJ] = useState('');
  const [corporateName, setCorporateName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [description, setDescription] = useState('');
  const [phoneCompany, setPhoneCompany] = useState('');
  const [cellPhoneCompany, setCellPhoneCompany] = useState('');
  const [zipcodeCompany, setZipcodeCompany] = useState('');
  const [streetCompany, setStreetCompany] = useState('');
  const [streetNumberCompany, setStreetNumberCompany] = useState('');
  const [complementCompany, setComplementCompany] = useState('');
  const [cityCompany, setCityCompany] = useState('');
  const [stateCompany, setStateCompany] = useState('');

  useEffect(() => {
    async function searchCompany() {
      if (cnpj === '') return;
      if (cnpj.length !== 14) return;

      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
      );

      const company: BrasilAPICNPJResponse = await response.json();

      setCorporateName(company.razao_social);
      setFantasyName(company.nome_fantasia);
      setDescription(company.cnae_fiscal_descricao);
      setZipcodeCompany(company.cep);
      setComplementCompany(company.complemento);
      setStreetNumberCompany(company.numero);
      setPhoneCompany(company.ddd_telefone_1);
      setCellPhoneCompany(company.ddd_telefone_2);
    }

    searchCompany();
  }, [cnpj]);

  useEffect(() => {
    async function searchZipcodeCompany() {
      if (zipcodeCompany === '') return;
      const formattedZipcodeCompany = zipcodeCompany.replace('-', '');
      if (formattedZipcodeCompany.length !== 8) return;

      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${formattedZipcodeCompany}`
      );
      const address: Address = await response.json();

      setStreetCompany(address.street);
      setCityCompany(address.city);
      setStateCompany(address.state);
    }

    searchZipcodeCompany();
  }, [zipcodeCompany]);

  const [nameAdvisor, setNameAdvisor] = useState('');
  const [rgAdvisor, setRGAdvisor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalHours, setTotalHours] = useState('');

  const data: InternshipInfoDTO = {
    student: {
      name,
      registration,
      semester,
      course,
      office,
      address: {
        zipcode,
        city,
        complement,
        state,
        street,
        streetNumber,
      },
    },
    company: {
      cnpj,
      corporateName,
      fantasyName,
      description,
      phone1: phoneCompany,
      phone2: cellPhoneCompany,
      address: {
        zipcode: zipcodeCompany,
        street: streetCompany,
        streetNumber: streetNumberCompany,
        complement: complementCompany,
        city: cityCompany,
        state: stateCompany,
      },
    },
    internship: {
      nameAdvisor,
      rgAdvisor,
      startDate,
      endDate,
      totalHours,
    },
  };

  return (
    <Container>
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
        title="Cargo/Função"
        name=""
        placeholder="Cargo do aluno na empresa"
        value={office}
        onChange={event => setOffice(event.target.value)}
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
      <Divider />
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
        value={phoneCompany}
        onChange={event => setPhoneCompany(event.target.value)}
      />
      <Input
        title="Celular"
        name=""
        placeholder="Celular"
        value={cellPhoneCompany}
        onChange={event => setCellPhoneCompany(event.target.value)}
      />
      <Input
        title="CEP"
        placeholder="CEP"
        name="address.zipcodeCompany"
        mask="zipcode"
        value={zipcodeCompany}
        onChange={event => setZipcodeCompany(event.target.value)}
      />
      <Input
        title="Endereço"
        placeholder="Endereço"
        name="address.streetCompany"
        value={streetCompany}
        onChange={event => setStreetCompany(event.target.value)}
      />
      <Input
        title="Numero"
        placeholder="Numero"
        name="address.streetCompanyNumber"
        maxLength={5}
        value={streetNumberCompany}
        onChange={event => setStreetNumberCompany(event.target.value)}
      />
      <Input
        title="ComplementCompanyo"
        placeholder="ComplementCompanyo"
        name="address.complementCompany"
        value={complementCompany}
        onChange={event => setComplementCompany(event.target.value)}
      />
      <Input
        title="Cidade"
        placeholder="Cidade"
        name="address.cityCompany"
        value={cityCompany}
        onChange={event => setCityCompany(event.target.value)}
      />
      <Input
        title="Estado"
        placeholder="Estado"
        name="address.state"
        value={stateCompany}
        onChange={event => setStateCompany(event.target.value)}
      />
      <Divider />

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
        value={endDate}
        onChange={event => setEndDate(event.target.value)}
      />
      <Input
        title="Total de horas"
        name=""
        placeholder="Total de horas"
        value={totalHours}
        onChange={event => setTotalHours(event.target.value)}
      />
      <button onClick={() => generatePDFMake(data)}>Gerar anexo 01</button>
    </Container>
  );
}
