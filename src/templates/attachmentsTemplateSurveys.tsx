import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Content } from 'pdfmake/interfaces';

const todayDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
  locale: ptBR,
});

interface IAverages {
  average01: string;
  average02: string;
  average03: string;
  average04: string;
  average05: string;
  average06: string;
  average07: string;
  average08: string;
  average09: string;
  average10: string;
  average11: string;
  average12: string;
  average13: string;
  average14: string;
  average15: string;
  average16: string;
  average17: string;
  average18: string;
}

export function attachmentsTemplateSurveys(data: IAverages) {
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
              text: `APRESENTAÇÃO: adequação do traje ao ambiente de trabalho, observância das normas da empresa.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average01}`,
          ],
          [
            {
              text: `ASSIDUIDADE E PONTUALIDADE: comparecimento com regularidade às atividades e cumprimento dos horários e prazos estabelecidos.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average02}`,
          ],
          [
            {
              text: `COMPETÊNCIA: capacidade técnica para execução de tarefas.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average03}`,
          ],
          [
            {
              text: `CONHECIMENTO TEÓRICO: conhecimento teórico demonstrado no cumprimento do estágio.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            ` ${data.average04}`,
          ],
          [
            {
              text: `COOPERAÇÃO: atuação junto a outras pessoas no sentido de contribuir para o alcance de um objetivo comum.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average05}`,
          ],
          [
            {
              text: `DESEMPENHO: rapidez, precisão e qualidade na execução das tarefas.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average06}`,
          ],
          [
            {
              text: `FACILIDADE DE COMPREENSÃO: capacidade  de  entender, interpretar e por em prática instruções recebidas.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average07}`,
          ],
          [
            {
              text: `INICIATIVA: capacidade de procurar novas soluções, sem prévia orientação.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average08}`,
          ],
          [
            {
              text: `INTERESSE: empenho em superar as suas próprias limitações.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average09}`,
          ],
          [
            {
              text: `LIDERANÇA: empenho em superar as suas próprias limitações.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average10}`,
          ],
          [
            {
              text: `ORGANIZAÇÃO: capacidade de planejamento e preparo da execução de uma tarefa.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average11}`,
          ],
          [
            {
              text: `REDAÇÃO: clareza, precisão, objetividade e correção no uso da língua escrita.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average12}`,
          ],
          [
            {
              text: `RESPONSABILIDADE: cumprimento dos prazos estabelecidos e zelo pôr materiais, equipamentos ou instalações que lhe são confiados.`,
              alignment: 'justify',
              lineHeight: 1.5,
              margin: [0, 0, 0, 5],
            },
            `${data.average13}`,
          ],
        ],
      },
      layout: 'lightHorizontalLines',
    },
  ];

  const Attachment02: Content = [
    {
      text: `O estágio foi útil para o estudante?: ${data.average14}`,
      pageBreak: 'before',
      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `O estágio foi útil pela Unidade Concedente?: ${data.average15}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `No caso das respostas serem negativas, que medidas podem ser tomadas para a sua efetiva correção e continuidade: ${data.average16}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `O estagiário passou a pertencer ao quadro de da Unidade Concedente, após o encerramento do estágio?: ${data.average17}`,

      alignment: 'justify',
      lineHeight: 1.5,
    },
    {
      text: `Em caso positivo, em que nível e função foi admitido?: ${data.average18}`,

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
