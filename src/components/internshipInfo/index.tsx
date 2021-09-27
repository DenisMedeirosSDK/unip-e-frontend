import React, { useEffect, useState } from 'react';

import { attachmentsTemplateInternshipInfo } from '../../templates/attachmentsTemplateInternshipInfo';
import { generatePDFMake } from '../../utils/generatePDFMake';
import { Address, InternshipInfoDTO } from '../../dtos/InternshipInfodto';

import { Button } from '../Button';
import { Input } from '../Input';

import styles from './styles.module.scss';

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
      if (cnpj.length !== 18) return;
      let formattedCNPJ = cnpj.replace('-', '');
      formattedCNPJ = cnpj.replace('/', '');

      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${formattedCNPJ}`
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
      if (formattedZipcodeCompany === '') return;

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

  async function handleGeneratePDF() {
    const templates = attachmentsTemplateInternshipInfo(data);
    generatePDFMake(templates);
  }

  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>Dados do aluno</p>
      <Input
        name="name"
        title="Nome"
        placeholder="Nome"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <Input
        name="registration"
        title="Matricula - (RA)"
        placeholder="Matricula - (RA)"
        style={{ textTransform: 'uppercase' }}
        mask="RA"
        value={registration}
        onChange={event => setRegistration(event.target.value)}
      />
      <Input
        name="course"
        title="Curso"
        placeholder="Curso"
        value={course}
        onChange={event => setCourse(event.target.value)}
      />
      <Input
        name="semester"
        title="Semestre"
        placeholder="Semestre"
        maxLength={2}
        value={semester}
        onChange={event => setSemester(event.target.value)}
      />
      <Input
        name="office"
        title="Cargo/Função"
        placeholder="Cargo do aluno na empresa"
        value={office}
        onChange={event => setOffice(event.target.value)}
      />
      <Input
        name="student.address.zipcode"
        title="CEP"
        placeholder="CEP"
        mask="zipcode"
        value={zipcode}
        onChange={event => setZipcode(event.target.value)}
      />
      <Input
        name="student.address.street"
        title="Endereço"
        placeholder="Endereço"
        value={street}
        onChange={event => setStreet(event.target.value)}
      />
      <Input
        name="student.address.streetNumber"
        title="Numero"
        placeholder="Numero"
        maxLength={5}
        value={streetNumber}
        onChange={event => setStreetNumber(event.target.value)}
      />
      <Input
        name="student.address.complement"
        title="Complemento"
        placeholder="Complemento"
        value={complement}
        onChange={event => setComplement(event.target.value)}
      />
      <Input
        name="student.address.city"
        title="Cidade"
        placeholder="Cidade"
        value={city}
        onChange={event => setCity(event.target.value)}
      />
      <Input
        name="student.address.state"
        title="Estado"
        placeholder="Estado"
        maxLength={2}
        value={state}
        onChange={event => setState(event.target.value)}
      />
      <div className={styles.divider} />
      <p className={styles.subTitle}>Dados da empresa</p>
      <Input
        name="cnpj"
        title="CNPJ"
        placeholder="CNPJ"
        value={cnpj}
        mask="CNPJ"
        onChange={event => setCNPJ(event.target.value)}
      />
      <Input
        name="corporateName"
        title="Nome da empresa"
        placeholder="Nome da empresa"
        value={corporateName}
        onChange={event => setCorporateName(event.target.value)}
      />
      <Input
        name="fantasyName"
        title="Nome fantasia"
        placeholder="Nome fantasia"
        value={fantasyName}
        onChange={event => setFantasyName(event.target.value)}
      />
      <Input
        name="description"
        title="Atividade da Unidade Concedente"
        placeholder="Atividade da Unidade Concedente"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <Input
        name="phone1"
        title="Telefone"
        placeholder="Telefone"
        value={phoneCompany}
        mask="phone"
        onChange={event => setPhoneCompany(event.target.value)}
      />
      <Input
        name="phone2"
        title="Celular"
        placeholder="Celular"
        value={cellPhoneCompany}
        onChange={event => setCellPhoneCompany(event.target.value)}
      />
      <Input
        name="company.address.zipcode"
        title="CEP"
        placeholder="CEP"
        mask="zipcode"
        value={zipcodeCompany}
        onChange={event => setZipcodeCompany(event.target.value)}
      />
      <Input
        name="company.address.street"
        title="Endereço"
        placeholder="Endereço"
        value={streetCompany}
        onChange={event => setStreetCompany(event.target.value)}
      />
      <Input
        name="company.address.streetNumber"
        title="Numero"
        placeholder="Numero"
        maxLength={5}
        type="number"
        value={streetNumberCompany}
        onChange={event => setStreetNumberCompany(event.target.value)}
      />
      <Input
        name="company.address.complement"
        title="Complemento"
        placeholder="Complemento"
        value={complementCompany}
        onChange={event => setComplementCompany(event.target.value)}
      />
      <Input
        name="company.address.city"
        title="Cidade"
        placeholder="Cidade"
        value={cityCompany}
        onChange={event => setCityCompany(event.target.value)}
      />
      <Input
        name="company.address.state"
        title="Estado"
        placeholder="Estado"
        value={stateCompany}
        onChange={event => setStateCompany(event.target.value)}
      />

      <div className={styles.divider} />

      <p className={styles.subTitle}>Dados do estágio</p>

      <Input
        name="internship.nameAdvisor"
        title="Nome do orientador"
        placeholder="Nome do orientador"
        value={nameAdvisor}
        onChange={event => setNameAdvisor(event.target.value)}
      />
      <Input
        name="internship.rgAdvisor"
        title="RG do orientador"
        placeholder="RG do orientador"
        value={rgAdvisor}
        onChange={event => setRGAdvisor(event.target.value)}
        mask="RG"
        maxLength={9}
      />
      <Input
        name="internship.startDate"
        title="Data de Inicio"
        placeholder="Data de Inicio"
        value={startDate}
        onChange={event => setStartDate(event.target.value)}
        mask="date"
      />
      <Input
        name="internship.endDate"
        title="Data de Termino"
        placeholder="Data de Termino"
        value={endDate}
        mask="date"
        inputMode="numeric"
        onChange={event => setEndDate(event.target.value)}
      />
      <Input
        name="internship.totalHours"
        title="Total de horas"
        placeholder="Total de horas"
        value={totalHours}
        onChange={event => setTotalHours(event.target.value)}
      />

      <div className={styles.divider} />

      <Button title="Gerar anexos" onClick={handleGeneratePDF} />
    </div>
  );
}
