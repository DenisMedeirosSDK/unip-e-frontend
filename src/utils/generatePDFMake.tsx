import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import pdfPrinter from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface Props {
  student: {
    name: string;
    course: string;
    office: string;
    address: {
      city: string;
    };
  };
  company: {
    corporateName: string;
  };
  internship: {
    nameAdvisor: string;
    rgAdvisor: string;
    endDate: string;
    startDate: string;
    totalHours: string;
  };
}

const todayDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
  locale: ptBR,
});

export function generatePDFMake(data: Props) {
  pdfPrinter.vfs = pdfFonts.pdfMake.vfs;

  const docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [100, 40, 80, 60],
    defaultStyle: { fontSize: 12 },
    content: [
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
        CEP 18087-101 –Sorocaba / SP
        
        Ref. Estágio
        `,
        margin: [0, 50, 0, 20],
        bold: true,
      },
      // { text: 'Ref. Estágio', style: { bold: true, margin: [0, 50] } },
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
    ],
    footer: [
      {
        text: 'UNIP - Universitária Paulista',
        alignment: 'center',
        bold: true,
      },
    ],
  };

  pdfPrinter.createPdf(docDefinition).download();
}
