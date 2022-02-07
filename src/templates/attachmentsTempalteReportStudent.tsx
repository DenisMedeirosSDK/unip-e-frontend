import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Content } from 'pdfmake/interfaces';
import { ReportStudent } from '../dtos/ReportStudent';

export function attachmentsTempalteReportStudent(data: ReportStudent) {
  const todayDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const courseUpper = data.student.course.toUpperCase();

  const coverPage: Content = [
    {
      text: 'UNIVERSIDADE PAULISTA',
      alignment: 'center',
      bold: true,
      margin: [0, 100, 0, 50],
      lineHeight: 1.5,
    },
    {
      text: `${data.student.name} - ${data.student.registration}`,
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 50],
      lineHeight: 1.5,
    },
    {
      text: 'RELATÓRIO FINAL DE ESTÁGIO SUPERVISIONADO',
      alignment: 'center',
      bold: true,
      margin: [0, 50, 0, 50],
      lineHeight: 1.5,
    },
    {
      text: `TRABALHO APRESENTADO PARA
      AVALIAÇÃO DE ESTÁGIO
      SUPERVISIONADO DO CURSO:
      ${courseUpper} DA
      UNIVERSIDADE PAULISTA.`,
      alignment: 'right',
      bold: true,
      margin: [0, 20, 0, 100],
      lineHeight: 1.5,
    },
    {
      text: `COORDENADOR DO CURSO: ${data.student.courseCoodinator}`,
      alignment: 'center',
      bold: true,
      lineHeight: 1.5,
    },
    {
      text: `CURSO: ${data.student.course}`,
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 80],
      lineHeight: 1.5,
    },
    {
      text: `${todayDate}`,
      alignment: 'center',
      bold: true,
    },
  ];

  const introductionAttachments: Content = [
    {
      text: '1. INTRODUÇÃO',
      alignment: 'left',
      bold: true,
      margin: [0, 10],
      pageBreak: 'before',
    },
    {
      text: `${data.introduction.resume}`,
      alignment: 'justify',
      margin: [0, 10],
      lineHeight: 1.5,
    },
    {
      text: '1.1 Objetivos do Estágio.',
      margin: [20, 10],
      lineHeight: 1.5,
      bold: true,
    },
    {
      text: '1.1.1 - O que faz?',
      margin: [40, 5],
      lineHeight: 1.5,
    },
    {
      text: `${data.introduction.survey01}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '1.1.2 - O que o estagiário ganha com isso?',
      margin: [40, 5],
      lineHeight: 1.5,
    },
    {
      text: `${data.introduction.survey02}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '1.1.3 - Como o curso pode contribuir para o seu trabalho e vice-versa?',
      margin: [40, 5],
      lineHeight: 1.5,
    },
    {
      text: `${data.introduction.survey03}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '1.1.4 - Onde quer chegar?',
      margin: [40, 5],
      lineHeight: 1.5,
    },
    {
      text: `${data.introduction.survey04}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '1.1.5 - O que e como o trabalho do estagiário contribuiu para a empresa?',
      margin: [40, 5],
      lineHeight: 1.5,
    },
    {
      text: `${data.introduction.survey05}`,
      margin: [0, 5],
      alignment: 'justify',
      lineHeight: 1.5,
    },
  ];

  const companyInfo: Content = [
    {
      text: '2. A EMPRESA',
      alignment: 'left',
      bold: true,
      lineHeight: 1.5,
      margin: [0, 10],
      pageBreak: 'before',
    },
    {
      text: `${data.company.resume}`,
      alignment: 'justify',
      margin: [0, 10],
      lineHeight: 1.5,
    },
    {
      text: '2.1 História',
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.company.survey01}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '2.2 Contexto Atual',
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.company.survey02}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '2.3 Serviços Prestados',
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.company.survey03}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: '2.4 Produtos Oferecidos/Fabricados – Portfolio.',
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.company.survey04}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
    {
      text: `3. INFRAESTRUTURA DE TI`,
      bold: true,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
      pageBreak: 'before',
    },
    {
      text: `${data.company.survey05}`,
      alignment: 'justify',
      margin: [0, 5],
      lineHeight: 1.5,
    },
  ];

  const internship: Content = [
    {
      text: `4. ATIVIDADES DESENVOLVIDAS`,
      pageBreak: 'before',
      bold: true,
      lineHeight: 1.5,
      margin: [0, 10],
    },
    {
      text: `${data.internship.resume}`,
      lineHeight: 1.5,
      margin: [0, 10],
    },
    {
      text: '4.1 Histórico de Atuação e Funções (o relatório não deve ser feito descrevendo atividades diárias)',
      lineHeight: 1.5,
      margin: [20, 10],
    },
    {
      text: '4.1.1 - Áreas de atuação e funções',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey01}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.1.2 - Evolução dos cargos e funções',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey02}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.1.3 - Descrição e explicação das mudanças nas funções',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey03}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.1.4 - Texto sobre as atividades atuais',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey04}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.1.5 - Descrição geral e apresentação das atividades atuais',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey05}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.1.6 - Motivo da mudança de função?',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey06}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.1.7 - O que o estagiário faz atualmente?',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey07}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.2 Descrição das Atividades e Tarefas Desenvolvidas',
      lineHeight: 1.5,
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.internship.survey08}`,
      lineHeight: 1.5,
      margin: [0, 10],
    },
    {
      text: '4.3 Conceitos, Métodos, Técnicas e Bibliografia Utilizados nas Atividades.',
      bold: true,
      lineHeight: 1.5,
      margin: [20, 5],
    },
    {
      text: '4.3.1 - Tecnologia utilizada',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey09}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.3.2 - Equipamentos e dispositivos utilizados',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey10}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '4.3.3 - Bibliografia Utilizada nas Atividades',
      lineHeight: 1.5,
      margin: [40, 5],
    },
    {
      text: `${data.internship.survey11}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
  ];

  const conclusions: Content = [
    {
      text: `5. CONCLUSÕES E RESULTADOS`,
      pageBreak: 'before',
      bold: true,
      lineHeight: 1.5,
      margin: [0, 10],
    },
    {
      text: '5.1 Principais Resultados Obtidos',
      lineHeight: 1.5,
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.conclusions.survey01}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '5.2 Conclusões sobre os Conceitos, Métodos, Técnicas e Bibliografia Utilizados',
      lineHeight: 1.5,
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.conclusions.survey02}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '5.3 A Empresa e o Ambiente de Trabalho',
      lineHeight: 1.5,
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.conclusions.survey03}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: '5.4 Contribuição do Estágio na Formação acadêmica e profissional',
      lineHeight: 1.5,
      margin: [20, 5],
      bold: true,
    },
    {
      text: `${data.conclusions.survey04}`,
      lineHeight: 1.5,
      margin: [0, 5],
    },
  ];

  const attachments = [
    coverPage,
    introductionAttachments,
    companyInfo,
    internship,
    conclusions,
  ];

  return attachments;
}
