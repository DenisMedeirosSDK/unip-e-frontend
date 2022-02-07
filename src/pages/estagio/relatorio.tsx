import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ReportStudent } from '../../dtos/ReportStudent';
import { generatePDFMake } from '../../utils/generatePDFMake';
import { attachmentsTempalteReportStudent } from '../../templates/attachmentsTempalteReportStudent';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputTextArea } from '../../components/InputTextArea';

import styles from '../../styles/pages/reportStudent.module.scss';

const schema = Yup.object().shape({
  introduction: Yup.object({
    resume: Yup.string().required('É necessário ter um resumo'),
    survey01: Yup.string().required('É necessário responder essa questão'),
    survey02: Yup.string().required('É necessário responder essa questão'),
    survey03: Yup.string().required('É necessário responder essa questão'),
    survey04: Yup.string().required('É necessário responder essa questão'),
    survey05: Yup.string().required('É necessário responder essa questão'),
  }),
  company: Yup.object({
    resume: Yup.string().required('É necessário ter um resumo'),
    survey01: Yup.string().required('É necessário responder essa questão'),
    survey02: Yup.string().required('É necessário responder essa questão'),
    survey03: Yup.string().required('É necessário responder essa questão'),
    survey04: Yup.string().required('É necessário responder essa questão'),
    survey05: Yup.string().required('É necessário responder essa questão'),
  }),
  internship: Yup.object({
    resume: Yup.string().required('É necessário ter um resumo'),
    survey01: Yup.string().required('É necessário responder essa questão'),
    survey02: Yup.string().required('É necessário responder essa questão'),
    survey03: Yup.string().required('É necessário responder essa questão'),
    survey04: Yup.string().required('É necessário responder essa questão'),
    survey05: Yup.string().required('É necessário responder essa questão'),
    survey06: Yup.string().required('É necessário responder essa questão'),
    survey07: Yup.string().required('É necessário responder essa questão'),
    survey08: Yup.string().required('É necessário responder essa questão'),
    survey09: Yup.string().required('É necessário responder essa questão'),
    survey10: Yup.string().required('É necessário responder essa questão'),
    survey11: Yup.string().required('É necessário responder essa questão'),
  }),
  conclusions: Yup.object({
    survey01: Yup.string().required('É necessário responder essa questão'),
    survey02: Yup.string().required('É necessário responder essa questão'),
    survey03: Yup.string().required('É necessário responder essa questão'),
    survey04: Yup.string().required('É necessário responder essa questão'),
  }),
  student: Yup.object({
    name: Yup.string().required('É necessário o nome do aluno'),
    registration: Yup.string().required('É necessário o RA do aluno'),
    course: Yup.string().required('É necessário o curso do aluno'),
    courseCoodinator: Yup.string().required(
      'É necessário o nome do coordenador de estagio'
    ),
  }),
});

export default function Relatorio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportStudent>({
    resolver: yupResolver(schema) as any,
    reValidateMode: 'onChange',
    mode: 'all',
  });
  function onSubmit(data: ReportStudent) {
    generatePDFMake(attachmentsTempalteReportStudent(data));
  }
  return (
    <div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <label htmlFor="">Nome do aluno</label>
            <Input
              name="student.name"
              register={register('student.name')}
              required
              error={errors.student?.name}
            />
            <label htmlFor="">RA do aluno</label>
            <Input
              name="student.registration"
              register={register('student.registration')}
              required
              mask="RA"
              error={errors.student?.registration}
            />
            <label htmlFor="">Nome do curso</label>
            <Input
              name="student.course"
              register={register('student.course')}
              required
              error={errors.student?.course}
            />
            <label htmlFor="">Nome do cordenador do curso</label>
            <Input
              name="student.courseCoodinator"
              register={register('student.courseCoodinator')}
              required
              error={errors.student?.courseCoodinator}
            />
          </section>
          <section>
            <label htmlFor="">INTRODUÇÃO</label>
            <InputTextArea
              name="introduction.resume"
              register={register('introduction.resume')}
              required
              error={errors.introduction?.resume}
            />
            <label htmlFor="">O que faz?</label>
            <InputTextArea
              name="introduction.survey01"
              register={register('introduction.survey01')}
              required
              error={errors.introduction?.survey01}
            />
            <label htmlFor="">O que o estagiário ganha com isso?</label>
            <InputTextArea
              name="introduction.survey02"
              register={register('introduction.survey02')}
              required
              error={errors.introduction?.survey02}
            />
            <label htmlFor="">
              Como o curso pode contribuir para o seu trabalho e vice-versa?
            </label>
            <InputTextArea
              name="introduction.survey03"
              register={register('introduction.survey03')}
              required
              error={errors.introduction?.survey03}
            />
            <label htmlFor="">Onde quer chegar?</label>
            <InputTextArea
              name="introduction.survey04"
              register={register('introduction.survey04')}
              required
              error={errors.introduction?.survey04}
            />
            <label htmlFor="">
              O que e como o trabalho do estagiário contribuiu para a empresa?
            </label>
            <InputTextArea
              name="introduction.survey05"
              register={register('introduction.survey05')}
              required
              error={errors.introduction?.survey05}
            />
          </section>
          <section>
            <label htmlFor="">EMPRESA</label>
            <InputTextArea
              name="company.resume"
              register={register('company.resume')}
              required
              error={errors.company?.resume}
            />
            <label htmlFor="">História</label>
            <InputTextArea
              name="company.survey1"
              register={register('company.survey01')}
              required
              error={errors.company?.survey01}
            />
            <label htmlFor="">Contexto Atual</label>
            <InputTextArea
              name="company.survey2"
              register={register('company.survey02')}
              required
              error={errors.company?.survey02}
            />
            <label htmlFor="">Serviços Prestados</label>
            <InputTextArea
              name="company.survey3"
              register={register('company.survey03')}
              required
              error={errors.company?.survey03}
            />
            <label htmlFor="">
              Produtos Oferecidos/Fabricados – Portfolio.
            </label>
            <InputTextArea
              name="company.survey4"
              register={register('company.survey04')}
              required
              error={errors.company?.survey04}
            />
            <label htmlFor="">INFRAESTRUTURA DE TI</label>
            <InputTextArea
              name="company.survey5"
              register={register('company.survey05')}
              required
              error={errors.company?.survey05}
            />
          </section>
          <section>
            <label htmlFor="">ATIVIDADES DESENVOLVIDAS</label>
            <InputTextArea
              name="internship.resume"
              register={register('internship.resume')}
              required
              error={errors.internship?.resume}
            />
            <p>
              Histórico de Atuação e Funções (o relatório não deve ser feito
              descrevendo atividades diárias)
            </p>
            <label htmlFor="">Áreas de atuação e funções</label>
            <InputTextArea
              name="internship.survey1"
              register={register('internship.survey01')}
              required
              error={errors.internship?.survey01}
            />
            <label htmlFor="">Evolução dos cargos e funções</label>
            <InputTextArea
              name="internship.survey2"
              register={register('internship.survey02')}
              required
              error={errors.internship?.survey02}
            />
            <label htmlFor="">
              Descrição e explicação das mudanças nas funções
            </label>
            <InputTextArea
              name="internship.survey3"
              register={register('internship.survey03')}
              required
              error={errors.internship?.survey03}
            />
            <label htmlFor="">Texto sobre as atividades atuais</label>
            <InputTextArea
              name="internship.survey4"
              register={register('internship.survey04')}
              required
              error={errors.internship?.survey04}
            />
            <label htmlFor="">
              Descrição geral e apresentação das atividades atuais
            </label>
            <InputTextArea
              name="internship.survey5"
              register={register('internship.survey05')}
              required
              error={errors.internship?.survey05}
            />
            <label htmlFor="">Motivo da mudança de função?</label>
            <InputTextArea
              name="internship.survey06"
              register={register('internship.survey06')}
              required
              error={errors.internship?.survey06}
            />
            <label htmlFor="">O que o estagiário faz atualmente?</label>
            <InputTextArea
              name="internship.survey07"
              register={register('internship.survey07')}
              required
              error={errors.internship?.survey07}
            />
            <label htmlFor="">
              Descrição das Atividades e Tarefas Desenvolvidas
            </label>
            <InputTextArea
              name="internship.survey08"
              register={register('internship.survey08')}
              required
              error={errors.internship?.survey08}
            />
            <p>
              Conceitos, Métodos, Técnicas e Bibliografia Utilizados nas
              Atividades.
            </p>
            <label htmlFor="">Tecnologia utilizada</label>
            <InputTextArea
              name="internship.survey09"
              register={register('internship.survey09')}
              required
              error={errors.internship?.survey09}
            />
            <label htmlFor="">Equipamentos e dispositivos utilizados</label>
            <InputTextArea
              name="internship.survey10"
              register={register('internship.survey10')}
              required
              error={errors.internship?.survey10}
            />
            <label htmlFor="">Bibliografia Utilizada nas Atividades</label>
            <InputTextArea
              name="internship.survey11"
              register={register('internship.survey11')}
              required
              error={errors.internship?.survey11}
            />
          </section>
          <section>
            <p>CONCLUSÕES E RESULTADOS</p>
            <label htmlFor="">Principais Resultados Obtidos</label>
            <InputTextArea
              name="conclusions.survey01"
              register={register('conclusions.survey01')}
              required
              error={errors.conclusions?.survey01}
            />
            <label htmlFor="">
              Conclusões sobre os Conceitos, Métodos, Técnicas e Bibliografia
              Utilizados
            </label>
            <InputTextArea
              name="conclusions.survey02"
              register={register('conclusions.survey02')}
              required
              error={errors.conclusions?.survey02}
            />
            <label htmlFor="">A Empresa e o Ambiente de Trabalho</label>
            <InputTextArea
              name="conclusions.survey03"
              register={register('conclusions.survey03')}
              required
              error={errors.conclusions?.survey03}
            />
            <label htmlFor="">
              Contribuição do Estágio na Formação acadêmica e profissional
            </label>
            <InputTextArea
              name="conclusions.survey04"
              register={register('conclusions.survey04')}
              required
              error={errors.conclusions?.survey04}
            />
          </section>
          <Button title="Gerar relatorio do aluno" type="submit" />
        </form>
      </div>
    </div>
  );
}
