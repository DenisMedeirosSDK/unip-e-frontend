import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Content } from 'pdfmake/interfaces';

import { SurveysDTO } from '../dtos/SurveysDTO';

const todayDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
  locale: ptBR,
});

export function attachmentsTemplateSurveys(data: SurveysDTO) {
  const Attachment01: Content = [
    {
      table: {
        widths: 'auto',
        body: [
          [
            { text: 'ASPECTOS AVALIADOS', bold: true },
            { text: 'NOTA', bold: true },
          ],
          [
            {
              text: `${data.question01.title}: ${data.question01.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question01.average01}`,
          ],
          [
            {
              text: `${data.question02.title}: ${data.question02.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question02.average02}`,
          ],
          [
            {
              text: `${data.question03.title}: ${data.question03.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question03.average03}`,
          ],
          [
            {
              text: `${data.question04.title}: ${data.question04.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            ` ${data.question04.average04}`,
          ],
          [
            {
              text: `${data.question05.title}: ${data.question05.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question05.average05}`,
          ],
          [
            {
              text: `${data.question06.title}: ${data.question06.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question06.average06}`,
          ],
          [
            {
              text: `${data.question07.title}: ${data.question07.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question07.average07}`,
          ],
          [
            {
              text: `${data.question08.title}: ${data.question08.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question08.average08}`,
          ],
          [
            {
              text: `${data.question09.title}: ${data.question09.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question09.average09}`,
          ],
          [
            {
              text: `${data.question10.title}: ${data.question10.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question10.average10}`,
          ],
          [
            {
              text: `${data.question11.title}: ${data.question11.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question11.average11}`,
          ],
          [
            {
              text: `${data.question12.title}: ${data.question12.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question12.average12}`,
          ],
          [
            {
              text: `${data.question13.title}: ${data.question13.question}`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.question13.average13}`,
          ],
        ],
      },
      layout: 'lightHorizontalLines',
    },
  ];

  const Attachment02: Content = [
    {
      text: `${data.question14.title}: ${data.question14.average14}`,
      pageBreak: 'before',
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `${data.question15.title}: ${data.question15.average15}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `${data.question16.title}: ${data.question16.average16}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `${data.question17.title}: ${data.question17.average17}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `${data.question18.title}: ${data.question18.average18}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },

    {
      text: `${todayDate}`,
      alignment: 'center',
      margin: [0, 50],
      bold: true,
    },
    {
      text: `Supervisor de Estágios da UNIP`,
      alignment: 'right',
      margin: [0, 50],
      bold: true,
    },
    {
      text: `________________________________
      Carimbo e assinatura pela UNIP`,
      alignment: 'right',
      margin: [0, 50],
    },
  ];

  const attachments = [Attachment01, Attachment02];

  return attachments;
}
