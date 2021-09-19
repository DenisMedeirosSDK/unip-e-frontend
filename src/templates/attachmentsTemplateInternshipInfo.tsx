import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Content } from 'pdfmake/interfaces';

import { InternshipInfoDTO } from '../dtos/InternshipInfodto';

const todayDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
  locale: ptBR,
});

export function attachmentsTemplateInternshipInfo(data: InternshipInfoDTO) {
  const Attachment01: Content = [
    {
      text: 'ANEXO 1',
      alignment: 'center',
      bold: true,
      fontSize: 10,
    },
    {
      text: 'TRAZER ESTE DOCUMENTO EM PAPEL TIMBRADO DA EMPRESA ',
      alignment: 'center',
      bold: true,
      italics: true,
      color: 'red',
      fontSize: 10,
      margin: [0, 10],
    },
    {
      text: 'ESTÁGIO SUPERVISIONADO - ATESTADO DE ESTÁGIO',
      alignment: 'center',
      bold: true,
      margin: [0, 20, 0, 20],
    },
    {
      text: `${data.student.address.city}, ${todayDate}`,
      alignment: 'right',
    },
    {
      text: `Ilmo. Sr.
        Coordenador do Programa de Estágio Supervisionado
        Curso de ${data.student.course}
        UNIP - Universidade Paulista / Unidade Universitária de Sorocaba
        Av. Independência, 412 - Éden
        CEP 18087-101 – Sorocaba / SP
        
        Ref. Estágio
        `,
      margin: [0, 50, 0, 20],
      bold: true,
    },
    {
      text: `Atestamos para os devidos fins, que o(a) estudante ${data.student.name}, da Universidade Paulista, realizou sob orientação do(a) Sr(a) ${data.internship.nameAdvisor}, RG no ${data.internship.rgAdvisor}, as atividades correspondentes ao programa de Estágio Supervisionado, na empresa ${data.company.corporateName} (razão social da empresa), no período de ${data.internship.startDate} à ${data.internship.endDate} num total de ${data.internship.totalHours} horas, exercendo a função ${data.student.office}.`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: 'Atenciosamente,',
      margin: [0, 35, 0, 20],
      alignment: 'center',
    },
    {
      text: '________________________________________',
      alignment: 'center',
    },
    {
      text: '(Assinatura)',
      alignment: 'center',
      bold: true,
      margin: [0, 5],
    },
    {
      text: 'Nome Legivel do declarante:_________________________________________',
      alignment: 'justify',
      margin: [0, 20, 0, 10],
    },
    {
      text: 'Cargo que o declarante ocupa na organização/empresa:________________________________________________________',
      alignment: 'justify',
      lineHeight: 1.5,
      margin: [0, 5],
    },
    {
      text: `Observação Importante
        A declaração deve ser impressa em papel timbrado da Empresa/Organização, descriminando o nome e o cargo do declarante e com o carimbo do CNPJ da empresa e a assinatura do responsável autenticada em Cartório.
        `,
      alignment: 'center',
      fontSize: 10,
      margin: [0, 10, 0, 0],
    },
  ];
  const Attachment02: Content = [
    {
      text: 'ANEXO 2',
      alignment: 'center',
      bold: true,
      fontSize: 10,
      pageBreak: 'before',
    },
    {
      text: 'TRAZER ESTE DOCUMENTO EM PAPEL TIMBRADO DA EMPRESA ',
      alignment: 'center',
      bold: true,
      italics: true,
      color: 'red',
      fontSize: 10,
      margin: [0, 10],
    },
    {
      text: `RELATÓRIO DA EMPRESA 
      A SER PREENCHIDO PELO ORIENTADOR OU  
     SUPERVISOR DE ESTÁGIO NA UNIDADE CONCEDENTE `,
      alignment: 'center',
      bold: true,
      margin: [0, 20, 0, 20],
    },
    {
      text: `Nome do(a) aluno(a): ${data.student.name}
      Nº de matrícula: ${data.student.registration} , Semestre: ${data.student.semester}º`,
      lineHeight: 1.5,
    },
    {
      text: `Curso de ${data.student.course}`,
      margin: [0, 2, 0, 25],
      bold: true,
    },
    {
      text: `UNIDADE CONCEDENTE `,
      alignment: 'center',
      bold: true,
    },
    {
      text: `Nome: ${data.company.corporateName}`,
      alignment: 'justify',
      lineHeight: 1.5,
      margin: [0, 15, 0, 0],
    },
    {
      text: `Ramo da Unidade Concedente: ${data.company.fantasyName}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Atividade da Unidade Concedente: ${data.company.description}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Endereço: ${data.company.address.street}, Numero: ${
        data.company.address.streetNumber
      }  -  ${
        data.company.address.complement.length > 0
          ? data.company.address.complement
          : ''
      }
      Cidade: ${data.company.address.city}  -  Estado: ${
        data.company.address.state
      }  -  CEP: ${data.company.address.zipcode}
      Telefone(s): ${data.company.phone1}  -  ${data.company.phone2}`,
      margin: [0, 10, 0, 10],
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Orientador ou Supervisor de Estágio na Unidade Concedente (Chefe Imediato – mesmo nome informado no Atestado de Estágio)
      Nome: ${data.internship.nameAdvisor}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Duração do Estágio: Período de: ${data.internship.startDate} à ${data.internship.endDate}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Duração do Estágio em horas: ${data.internship.totalHours}`,
      alignment: 'justify',
      lineHeight: 1.5,
      margin: [0, 0, 0, 20],
    },
    {
      text: 'A presente avaliação tem por finalidade consolidar as observações obtidas durante o período de Estágio Supervisionado, constituindo-se de parâmetro indispensável à validação do mesmo. Solicitamos o preenchimento com notas de 0 a 10 de acordo com os conceitos abaixo apresentados. A avaliação imparcial e coerente com as atividades desempenhadas permitirá, no futuro, a inclusão de novos profissionais no mercado, com a qualidade requerida pelas Empresas.',
      alignment: 'justify',
      lineHeight: 1.5,
    },
  ];
  const Attachment03: Content = [
    {
      text: 'DADOS DO ALUNO',
      alignment: 'center',
      bold: true,
      pageBreak: 'before',
      margin: [0, 15, 0, 15],
    },
    {
      text: `Nome do(a) aluno(a): ${data.student.name}
      Nº de matrícula: ${data.student.registration} , Semestre: ${data.student.semester}º`,
      lineHeight: 1.5,
    },
    {
      text: `Curso: ${data.student.course}`,
      lineHeight: 1.5,
    },
    {
      text: `Endereço: ${data.student.address.street}, Numero: ${
        data.student.address.streetNumber
      }  -  ${
        data.student.address.complement.length > 0
          ? data.student.address.complement
          : ''
      }
      Cidade: ${data.student.address.city}  -  Estado: ${
        data.student.address.state
      }  -  CEP: ${data.student.address.zipcode}`,
      margin: [0, 10, 0, 20],
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `DADOS DA EMPRESA`,
      alignment: 'center',
      lineHeight: 1.5,
      bold: true,
      margin: [0, 15, 0, 15],
    },
    {
      text: `Nome: ${data.company.corporateName}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Ramo da Unidade Concedente: ${data.company.fantasyName}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Atividade da Unidade Concedente: ${data.company.description}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Endereço: ${data.company.address.street}, Numero: ${
        data.company.address.streetNumber
      }  -  ${
        data.company.address.complement.length > 0
          ? data.company.address.complement
          : ''
      }
      Cidade: ${data.company.address.city}  -  Estado: ${
        data.company.address.state
      }  -  CEP: ${data.company.address.zipcode}
      Telefone(s): ${data.company.phone1}  -  ${data.company.phone2}`,
      margin: [0, 10, 0, 10],
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Orientador ou Supervisor de Estágio na Unidade Concedente (Chefe Imediato – mesmo nome informado no Atestado de Estágio)
      Nome: ${data.internship.nameAdvisor}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Duração do Estágio: Período de: ${data.internship.startDate} à ${data.internship.endDate}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Duração do Estágio em horas: ${data.internship.totalHours}`,
      alignment: 'justify',
      lineHeight: 1.5,
    },
  ];

  const attachments = [Attachment01, Attachment02, Attachment03];

  return attachments;
}
