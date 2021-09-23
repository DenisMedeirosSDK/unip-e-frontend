import React, { useState } from 'react';
import Link from 'next/link';

import { SurveyQuestions } from '../../components/SurveyQuestions';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import UnipLogoSvg from '../../assets/logo-unip.svg';

import { attachmentsTemplateSurveys } from '../../templates/attachmentsTemplateSurveys';
import { generatePDFMake } from '../../utils/generatePDFMake';

import styles from '../../styles/pages/surveyPerformace.module.scss';

export default function Performace() {
  const [average01, setAverage01] = useState('');
  const [average02, setAverage02] = useState('');
  const [average03, setAverage03] = useState('');
  const [average04, setAverage04] = useState('');
  const [average05, setAverage05] = useState('');
  const [average06, setAverage06] = useState('');
  const [average07, setAverage07] = useState('');
  const [average08, setAverage08] = useState('');
  const [average09, setAverage09] = useState('');
  const [average10, setAverage10] = useState('');
  const [average11, setAverage11] = useState('');
  const [average12, setAverage12] = useState('');
  const [average13, setAverage13] = useState('');
  const [average14, setAverage14] = useState('');
  const [average15, setAverage15] = useState('');
  const [average16, setAverage16] = useState('');
  const [average17, setAverage17] = useState('');
  const [average18, setAverage18] = useState('');

  const data = {
    question01: {
      id: '1',
      title: 'APRESENTAÇÃO',
      average01,
      question:
        'adequação do traje ao ambiente de trabalho, observância das normas da empresa.',
    },
    question02: {
      id: '2',
      title: 'ASSIDUIDADE E PONTUALIDADE',
      average02,
      question:
        'comparecimento com regularidade às atividades e cumprimento dos horários e prazos estabelecidos.',
    },
    question03: {
      id: '3',
      title: 'COMPETÊNCIA',
      average03,
      question: 'capacidade técnica para execução de tarefas.',
    },
    question04: {
      id: '4',
      title: 'CONHECIMENTO TEÓRICO',
      average04,
      question: 'conhecimento teórico demonstrado no cumprimento do estágio.',
    },
    question05: {
      id: '5',
      title: 'COOPERAÇÃO',
      average05,
      question:
        'atuação junto a outras pessoas no sentido de contribuir para o alcance de um objetivo comum.',
    },
    question06: {
      id: '6',
      title: 'DESEMPENHO',
      average06,
      question: 'rapidez, precisão e qualidade na execução das tarefas.',
    },
    question07: {
      id: '7',
      title: 'FACILIDADE DE COMPREENSÃO',
      average07,
      question:
        'capacidade  de  entender, interpretar e por em prática instruções recebidas.',
    },
    question08: {
      id: '8',
      title: 'INICIATIVA',
      average08,
      question: 'capacidade de procurar novas soluções, sem prévia orientação.',
    },
    question09: {
      id: '9',
      title: 'INTERESSE',
      average09,
      question: 'empenho em superar as suas próprias limitações.',
    },
    question10: {
      id: '10',
      title: 'LIDERANÇA',
      average10,
      question:
        'capacidade de dirigir um grupo de pessoas na execução de uma tarefa.',
    },
    question11: {
      id: '11',
      title: 'ORGANIZAÇÃO',
      average11,
      question:
        'capacidade de planejamento e preparo da execução de uma tarefa. ',
    },
    question12: {
      id: '12',
      title: 'REDAÇÃO',
      average12,
      question:
        'clareza, precisão, objetividade e correção no uso da língua escrita.',
    },
    question13: {
      id: '13',
      title: 'RESPONSABILIDADE',
      average13,
      question:
        'cumprimento dos prazos estabelecidos e zelo pôr materiais, equipamentos ou instalações que lhe são confiados.',
    },
    question14: {
      title: 'O estágio foi útil para o estudante?',
      average14,
    },
    question15: {
      title: 'O estágio foi útil pela Unidade Concedente?',
      average15,
    },
    question16: {
      title:
        'No caso das respostas serem negativas, que medidas podem ser tomadas para a sua efetiva correção e continuidade',
      average16,
    },
    question17: {
      title:
        'O estagiário passou a pertencer ao quadro de da Unidade Concedente, após o encerramento do estágio?',
      average17,
    },
    question18: {
      title: 'Em caso positivo, em que nível e função foi admitido?',
      average18,
    },
  };

  function handleGeneratePDF() {
    generatePDFMake(attachmentsTemplateSurveys(data));
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <UnipLogoSvg />
        <p className={styles.title}>Orientação de estágio</p>
        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.menuText}>Inicio</a>
          </Link>
          <Link href="/estagio/performace">
            <a className={styles.menuText}>Performace do aluno</a>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.legend}>
          Insuficiente: até 2,9 | Regular: 3 a 6,9 | Bom: 7 a 8,9 | Excelente: 9
          a 10
        </p>
        <SurveyQuestions
          title="APRESENTAÇÃO PESSOAL"
          question="adequação do traje ao ambiente de trabalho, observância das normas da empresa."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average01}
            onChange={event => setAverage01(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="ASSIDUIDADE E PONTUALIDADE"
          question="comparecimento com regularidade às atividades e cumprimento dos horários e prazos estabelecidos."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average02}
            onChange={event => setAverage02(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="COMPETÊNCIA"
          question="capacidade técnica para execução de tarefas."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average03}
            onChange={event => setAverage03(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="CONHECIMENTO TEÓRICO"
          question="conhecimento teórico demonstrado no cumprimento do estágio."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average04}
            onChange={event => setAverage04(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="COOPERAÇÃO"
          question="atuação junto a outras pessoas no sentido de contribuir para o alcance de um objetivo comum."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average05}
            onChange={event => setAverage05(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="DESEMPENHO"
          question="rapidez, precisão e qualidade na execução das tarefas."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average06}
            onChange={event => setAverage06(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="FACILIDADE DE COMPREENSÃO"
          question="capacidade  de  entender, interpretar e por em prática instruções recebidas."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average07}
            onChange={event => setAverage07(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="INICIATIVA"
          question="capacidade de procurar novas soluções, sem prévia orientação."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average08}
            onChange={event => setAverage08(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="INTERESSE"
          question="empenho em superar as suas próprias limitações."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average09}
            onChange={event => setAverage09(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="LIDERANÇA"
          question="capacidade de dirigir um grupo de pessoas na execução de uma tarefa."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average10}
            onChange={event => setAverage10(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="ORGANIZAÇÃO"
          question="capacidade de planejamento e preparo da execução de uma tarefa."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average11}
            onChange={event => setAverage11(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="REDAÇÃO"
          question="clareza, precisão, objetividade e correção no uso da língua escrita."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average12}
            onChange={event => setAverage12(event.target.value)}
          />
        </SurveyQuestions>
        <SurveyQuestions
          title="RESPONSABILIDADE"
          question="cumprimento dos prazos estabelecidos e zelo pôr materiais, equipamentos ou instalações que lhe são confiados."
        >
          <Input
            title=""
            placeholder="Nota - 0 a 10"
            value={average13}
            onChange={event => setAverage13(event.target.value)}
          />
        </SurveyQuestions>
        <div className={styles.divider} />
        <Input
          placeholder="Sim ou Não"
          title="O estágio foi útil para o estudante?"
          value={average14}
          onChange={event => setAverage14(event.target.value)}
        />
        <Input
          placeholder="Sim ou Não"
          title="O estágio foi útil pela Unidade Concedente?"
          value={average15}
          onChange={event => setAverage15(event.target.value)}
        />
        <Input
          placeholder="Sugestão de melhoras"
          title="No caso das respostas serem negativas, que medidas podem ser tomadas para a sua efetiva correção e continuidade"
          value={average16}
          onChange={event => setAverage16(event.target.value)}
        />
        <Input
          placeholder="Sim ou Não"
          title="O estagiário passou a pertencer ao quadro de da Unidade Concedente, após o encerramento do estágio?"
          value={average17}
          onChange={event => setAverage17(event.target.value)}
        />
        <Input
          placeholder="Função / Cargo"
          title="Em caso positivo, em que nível e função foi admitido?"
          value={average18}
          onChange={event => setAverage18(event.target.value)}
        />
        <div className={styles.divider} />
        <Button
          title="Gerar relatorio de performace"
          onClick={handleGeneratePDF}
        />
      </div>
    </div>
  );
}
