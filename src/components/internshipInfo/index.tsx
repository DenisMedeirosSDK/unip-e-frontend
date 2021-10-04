import React, { useEffect, useState } from 'react';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { attachmentsTemplateInternshipInfo } from '../../templates/attachmentsTemplateInternshipInfo';
import { generatePDFMake } from '../../utils/generatePDFMake';

import { Address, InternshipInfoDTO } from '../../dtos/InternshipInfodto';

import styles from './styles.module.scss';

const schema = Yup.object().shape({
  student: Yup.object({
    name: Yup.string().required('É necessário o nome completo do aluno'),
    registration: Yup.string()
      .required('É necessário o RA do aluno')
      .uppercase(),
    course: Yup.string().required('É necessário o curso do aluno'),
    semester: Yup.string().required('É necessário o semestre do aluno'),
    office: Yup.string().required(
      'É necessário o cargo/função do aluno na empresa'
    ),
    address: Yup.object({
      zipcode: Yup.string().required('É necessário o CEP'),
      street: Yup.string().required('É necessário o endereço'),
      streetNumber: Yup.string().notRequired().max(5, 'Maxímo de 5 caracter'),
      complement: Yup.string().notRequired(),
      city: Yup.string().required('É necessário o nome da cidade'),
      state: Yup.string().required('É necessário o nome do estdo'),
    }),
  }),
  company: Yup.object({
    cnpj: Yup.string().notRequired().max(18, 'Verifique se CNPJ esta correto'),
    corporateName: Yup.string().required(
      'É necessário a razão social da empresa'
    ),
    fantasyName: Yup.string().notRequired(),
    description: Yup.string().required(
      'É necessário a descrição de atividades da empresa'
    ),
    phone1: Yup.string().notRequired(),
    phone2: Yup.string().notRequired(),
    address: Yup.object({
      zipcode: Yup.string()
        .required('É necessário o CEP')
        .max(9, 'Verifique se o CEP esta correto'),
      street: Yup.string().required('É necessário o endereço'),
      streetNumber: Yup.string().notRequired().max(5, 'Maxímo de 5 caracter'),
      complement: Yup.string().notRequired(),
      city: Yup.string().required('É necessário o nome da cidade'),
      state: Yup.string().required('É necessário o nome do estdo'),
    }),
  }),
  internship: Yup.object({
    nameAdvisor: Yup.string().required(
      'É necessário o nome do orientador do estágio'
    ),
    rgAdvisor: Yup.string().required(
      'É necessário o RG do orientador do estágio'
    ),
    startDate: Yup.string().required(
      'É necessário a data de inicio do estágio'
    ),
    endDate: Yup.string().required('É necessário a data de final do estágio'),
    totalHours: Yup.string().required(
      'É necessário o total de horas do estágio'
    ),
  }),
});

interface BrasilAPICNPJResponse {
  razao_social: string;
  nome_fantasia: string;
  cnae_fiscal_descricao: string;
  cep: string;
  descricao_tipo_logradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  municipio: string;
  uf: string;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
}

export function InternshipInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<InternshipInfoDTO>({
    resolver: yupResolver(schema) as any,
    reValidateMode: 'onChange',
    mode: 'all',
  });

  const [studentZipcode, setStudentZipcode] = useState('');
  const [companyCNPJ, setCompanyCNPJ] = useState('');

  useEffect(() => {
    async function loadAddressStudent() {
      if (studentZipcode === '') return;
      if (studentZipcode.length !== 9) return;
      const formattedZipcode = studentZipcode.replace('-', '');
      if (formattedZipcode.length !== 8) return;

      const responseStudentZipcode = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${formattedZipcode}`
      );

      const addressStudent: Address = await responseStudentZipcode.json();

      setValue('student.address.street', addressStudent.street);
      setValue('student.address.city', addressStudent.city);
      setValue('student.address.state', addressStudent.state);
    }
    loadAddressStudent();
  }, [studentZipcode]);

  useEffect(() => {
    async function loadCNPJData() {
      if (companyCNPJ === '') return;
      if (companyCNPJ.length !== 18) return;
      let value = companyCNPJ.replace('.', '');
      let valu1 = value.replace('.', '');
      let value2 = valu1.replace('/', '');
      let formattedCNPJ = value2.replace('-', '');

      if (formattedCNPJ.length !== 14) return;

      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${formattedCNPJ}`
      );

      const company: BrasilAPICNPJResponse = await response.json();

      setValue('company.corporateName', company.razao_social);
      setValue('company.fantasyName', company.nome_fantasia);
      setValue('company.description', company.cnae_fiscal_descricao);
      setValue('company.address.zipcode', company.cep);
      setValue(
        'company.address.street',
        `${company.descricao_tipo_logradouro} ${company.logradouro}`
      );
      setValue('company.address.complement', company.complemento);
      setValue('company.address.streetNumber', company.numero);
      setValue('company.address.city', company.municipio);
      setValue('company.address.state', company.uf);
      setValue('company.phone1', company.ddd_telefone_1);
      setValue('company.phone2', company.ddd_telefone_2);
    }
    loadCNPJData();
  }, [companyCNPJ]);

  function onSubmit(data: InternshipInfoDTO) {
    generatePDFMake(attachmentsTemplateInternshipInfo(data));
    reset(data);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.subTitle}>Dados do aluno</p>
        <Input
          name="student.name"
          register={register('student.name')}
          title="Nome"
          placeholder="Nome"
          error={errors.student?.name}
        />
        <Input
          name="student.registration"
          register={register('student.registration')}
          title="Matricula - (RA)"
          placeholder="Matricula - (RA)"
          style={{ textTransform: 'uppercase' }}
          mask="RA"
          error={errors.student?.registration}
        />
        <Input
          name="student.course"
          register={register('student.course')}
          title="Curso"
          placeholder="Curso"
          error={errors.student?.course}
        />
        <Input
          name="student.semester"
          register={register('student.semester')}
          title="Semestre"
          placeholder="Semestre"
          maxLength={2}
          error={errors.student?.semester}
        />
        <Input
          name="student.office"
          register={register('student.office')}
          title="Cargo/Função"
          placeholder="Cargo do aluno na empresa"
          error={errors.student?.office}
        />
        <Input
          name="student.address.zipcode"
          register={register('student.address.zipcode')}
          title="CEP"
          placeholder="CEP"
          mask="zipcode"
          error={errors.student?.address?.zipcode}
          onChangeCapture={event =>
            setStudentZipcode(event.currentTarget.value)
          }
        />
        <Input
          name="student.address.street"
          register={register('student.address.street')}
          title="Endereço"
          placeholder="Endereço"
          error={errors.student?.address?.street}
        />
        <Input
          name="student.address.streetNumber"
          register={register('student.address.streetNumber')}
          title="Numero"
          placeholder="Numero"
          maxLength={5}
          error={errors.student?.address?.streetNumber}
        />
        <Input
          name="student.address.complement"
          register={register('student.address.complement')}
          title="Complemento"
          placeholder="Complemento"
          error={errors.student?.address?.complement}
        />
        <Input
          name="student.address.city"
          register={register('student.address.city')}
          title="Cidade"
          placeholder="Cidade"
          error={errors.student?.address?.city}
        />
        <Input
          name="student.address.state"
          register={register('student.address.state')}
          title="Estado"
          placeholder="Estado"
          error={errors.student?.address?.state}
          maxLength={2}
        />
        <div className={styles.divider} />
        <p className={styles.subTitle}>Dados da empresa</p>
        <Input
          name="cnpj"
          register={register('company.cnpj')}
          title="CNPJ"
          placeholder="CNPJ"
          error={errors.company?.cnpj}
          mask="CNPJ"
          onChange={event => setCompanyCNPJ(event.target.value)}
        />
        <Input
          name="corporateName"
          register={register('company.corporateName')}
          title="Nome da empresa"
          placeholder="Nome da empresa"
          error={errors.company?.corporateName}
        />
        <Input
          name="fantasyName"
          register={register('company.fantasyName')}
          title="Nome fantasia"
          placeholder="Nome fantasia"
          error={errors.company?.fantasyName}
        />
        <Input
          name="description"
          register={register('company.description')}
          title="Atividade da Unidade Concedente"
          placeholder="Atividade da Unidade Concedente"
          error={errors.company?.description}
        />
        <Input
          name="phone1"
          register={register('company.phone1')}
          title="Telefone"
          placeholder="Telefone"
          error={errors.company?.phone1}
          mask="phone"
        />
        <Input
          name="phone2"
          register={register('company.phone2')}
          title="Celular"
          placeholder="Celular"
          error={errors.company?.phone2}
        />
        <Input
          name="company.address.zipcode"
          register={register('company.address.zipcode')}
          title="CEP"
          placeholder="CEP"
          error={errors.company?.address?.zipcode}
          mask="zipcode"
        />
        <Input
          name="company.address.street"
          register={register('company.address.street')}
          title="Endereço"
          placeholder="Endereço"
          error={errors.company?.address?.street}
        />
        <Input
          name="company.address.streetNumber"
          register={register('company.address.streetNumber')}
          title="Numero"
          placeholder="Numero"
          error={errors.company?.address?.streetNumber}
          maxLength={5}
          type="number"
        />
        <Input
          name="company.address.complement"
          register={register('company.address.complement')}
          title="Complemento"
          placeholder="Complemento"
          error={errors.company?.address?.complement}
        />
        <Input
          name="company.address.city"
          register={register('company.address.city')}
          title="Cidade"
          placeholder="Cidade"
          error={errors.company?.address?.city}
        />
        <Input
          name="company.address.state"
          register={register('company.address.state')}
          title="Estado"
          placeholder="Estado"
          error={errors.company?.address?.state}
        />

        <div className={styles.divider} />

        <p className={styles.subTitle}>Dados do estágio</p>

        <Input
          name="internship.nameAdvisor"
          register={register('internship.nameAdvisor')}
          title="Nome do orientador"
          placeholder="Nome do orientador"
          error={errors.internship?.nameAdvisor}
        />
        <Input
          name="internship.rgAdvisor"
          register={register('internship.rgAdvisor')}
          title="RG do orientador"
          placeholder="RG do orientador"
          error={errors.internship?.rgAdvisor}
          mask="RG"
          maxLength={9}
        />
        <Input
          name="internship.startDate"
          register={register('internship.startDate')}
          title="Data de Inicio"
          placeholder="Data de Inicio"
          error={errors.internship?.startDate}
          mask="date"
        />
        <Input
          name="internship.endDate"
          register={register('internship.endDate')}
          title="Data de Termino"
          placeholder="Data de Termino"
          error={errors.internship?.endDate}
          mask="date"
          inputMode="numeric"
        />
        <Input
          name="internship.totalHours"
          register={register('internship.totalHours')}
          title="Total de horas"
          placeholder="Total de horas"
          error={errors.internship?.totalHours}
        />

        <div className={styles.divider} />
        <Button title="Gerar anexos" type="submit" />
      </form>
    </div>
  );
}
